import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { Post } from '../types';

const CATEGORIES = ['Írószer', 'Papíráru', 'Rajzeszköz', 'Iskolaszer', 'Irodaszer', 'Kreatív', 'Egyéb'];

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else onLogin();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center px-4">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-200">
            <i className="fas fa-lock text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-black text-slate-800 brand-font italic">Onder Admin</h1>
          <p className="text-slate-400 text-sm mt-1">Belépés a kezelőfelületre</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">E-mail</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-50"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Jelszó</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-50"
              required
            />
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2 text-red-600 text-sm">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-md shadow-teal-100 disabled:opacity-50 mt-2"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Belépés...
              </span>
            ) : 'Belépés'}
          </button>
        </form>
      </div>
    </div>
  );
};

const PostForm: React.FC<{
  initial?: Post;
  onSave: () => void;
  onCancel: () => void;
}> = ({ initial, onSave, onCancel }) => {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [category, setCategory] = useState(initial?.category ?? CATEGORIES[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(initial?.image_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setError('');
    try {
      let image_url = initial?.image_url ?? '';

      if (imageFile) {
        const ext = imageFile.name.split('.').pop();
        const path = `${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(path, imageFile, { upsert: true });
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from('product-images').getPublicUrl(path);
        image_url = data.publicUrl;
      }

      if (!image_url) throw new Error('Kép szükséges');

      if (initial) {
        const { error } = await supabase.from('posts').update({ title, description, category, image_url }).eq('id', initial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('posts').insert({ title, description, category, image_url });
        if (error) throw error;
      }
      onSave();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ismeretlen hiba');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Cím *</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Termék neve..."
          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-50"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Leírás</label>
        <textarea
          value={description ?? ''}
          onChange={e => setDescription(e.target.value)}
          rows={3}
          placeholder="Rövid leírás (nem kötelező)..."
          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-50 resize-none"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Kategória</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-50"
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          Kép {!initial && '*'}
        </label>
        {previewUrl && (
          <img src={previewUrl} alt="előnézet" className="w-full h-52 object-cover rounded-xl mb-3 shadow-sm" />
        )}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-slate-200 rounded-xl py-5 text-slate-400 hover:border-teal-400 hover:text-teal-600 transition-colors bg-slate-50"
        >
          <i className="fas fa-cloud-upload-alt mr-2 text-lg"></i>
          {imageFile ? imageFile.name : 'Kép kiválasztása'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2 text-red-600 text-sm">
          <i className="fas fa-exclamation-circle"></i>
          {error}
        </div>
      )}
      <div className="flex gap-3 pt-1">
        <button
          type="submit"
          disabled={uploading}
          className="flex-1 bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-md shadow-teal-100 disabled:opacity-50"
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Mentés...
            </span>
          ) : (initial ? 'Módosítás' : 'Hozzáadás')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-slate-100 text-slate-600 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors"
        >
          Mégse
        </button>
      </div>
    </form>
  );
};

const AdminPanel: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'list' | 'create' | { edit: Post }>('list');

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Biztosan törlöd ezt a bejegyzést?')) return;
    await supabase.from('posts').delete().eq('id', id);
    fetchPosts();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const isEditing = typeof view === 'object' && 'edit' in view;
  const formTitle = view === 'create' ? 'Új bejegyzés' : 'Szerkesztés';

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100 px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          {(view === 'create' || isEditing) && (
            <button
              onClick={() => setView('list')}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <i className="fas fa-arrow-left text-sm"></i>
            </button>
          )}
          <h1 className="text-lg font-black text-slate-800 brand-font italic">
            {view === 'list' ? 'Termékújság' : formTitle}
          </h1>
        </div>
        {view === 'list' && (
          <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-red-500 transition-colors px-3 py-2 rounded-xl hover:bg-red-50">
            <i className="fas fa-sign-out-alt"></i>
            <span>Kilépés</span>
          </button>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {view === 'list' && (
          <>
            <button
              onClick={() => setView('create')}
              className="w-full mb-6 bg-teal-600 text-white py-4 rounded-2xl font-bold text-base hover:bg-teal-700 transition-colors shadow-md shadow-teal-100 flex items-center justify-center gap-2"
            >
              <i className="fas fa-plus"></i>
              Új bejegyzés hozzáadása
            </button>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-box-open text-slate-400 text-2xl"></i>
                </div>
                <p className="text-slate-400 font-medium">Még nincs bejegyzés.</p>
                <p className="text-slate-300 text-sm mt-1">Adj hozzá az első terméket!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {posts.map(post => (
                  <div key={post.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 items-center">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-slate-800 truncate">{post.title}</p>
                      <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full mt-0.5">
                        {post.category}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        {new Date(post.created_at).toLocaleDateString('hu-HU')}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => setView({ edit: post })}
                        className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-600 transition-colors"
                      >
                        <i className="fas fa-pen text-xs"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors"
                      >
                        <i className="fas fa-trash text-xs"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {(view === 'create' || isEditing) && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <PostForm
              initial={isEditing ? (view as { edit: Post }).edit : undefined}
              onSave={() => { setView('list'); fetchPosts(); }}
              onCancel={() => setView('list')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Admin: React.FC = () => {
  const [session, setSession] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(!!data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(!!s));
    return () => subscription.unsubscribe();
  }, []);

  if (session === null) return null;
  if (!session) return <LoginForm onLogin={() => setSession(true)} />;
  return <AdminPanel />;
};

export default Admin;
