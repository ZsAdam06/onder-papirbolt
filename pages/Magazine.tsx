import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Post } from '../types';

const CATEGORIES = ['Összes', 'Írószer', 'Papíráru', 'Rajzeszköz', 'Iskolaszer', 'Irodaszer', 'Kreatív', 'Egyéb'];

const OG_FUNCTION_URL = 'https://zqojpljiozelbtrafzuv.supabase.co/functions/v1/og';

const shareOnFacebook = (postId: string) => {
  const ogUrl = `${OG_FUNCTION_URL}?id=${postId}`;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ogUrl)}`, '_blank', 'width=600,height=400');
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const images = post.image_urls?.length ? post.image_urls : [post.image_url];
  const [idx, setIdx] = useState(0);
  const prev = useCallback((e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }, [images.length]);
  const next = useCallback((e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }, [images.length]);

  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full border border-slate-100">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={images[idx]}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-md px-3 py-1 rounded-full text-xs font-bold text-teal-600 uppercase tracking-widest">
          {post.category}
        </div>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white w-3' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{post.title}</h3>
        {post.description && (
          <p className="text-slate-500 text-sm mb-4 flex-grow italic">"{post.description}"</p>
        )}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {new Date(post.created_at).toLocaleDateString('hu-HU')}
          </p>
          <button
            onClick={() => shareOnFacebook(post.id)}
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] px-3 py-1.5 rounded-full transition-colors"
          >
            <i className="fab fa-facebook-f text-xs"></i>
            Megosztás
          </button>
        </div>
      </div>
    </div>
  );
};

const Magazine: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Összes');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let query = supabase.from('posts').select('*').order('created_at', { ascending: false });
      if (activeCategory !== 'Összes') query = query.eq('category', activeCategory);
      const { data } = await query;
      setPosts(data ?? []);
      setLoading(false);
    };
    fetchPosts();
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            Legújabb termékek
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Friss Árukészlet <br />
            <span className="text-teal-600 font-light italic brand-font">Egyenesen az üzletből</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Folyamatosan frissülő kínálatunk legújabb darabjai. Kövesse oldalunkat a legfrissebb termékekért!
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24">
            <i className="fas fa-box-open text-5xl text-slate-300 mb-4 block"></i>
            <p className="text-slate-400 text-lg">Nincs bejegyzés ebben a kategóriában.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="animate-in fade-in slide-in-from-bottom-12 duration-700"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Facebook section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <i className="fab fa-facebook text-teal-600"></i>
            Kövess minket Facebookon!
          </h2>
          <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden max-w-full">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FONDER-Pap%25C3%25ADr-100063292235639%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="700"
              style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-3xl bg-white/50">
          <p className="text-slate-500 italic mb-4">
            "A termékek elérhetőségéről pontos információkért kérjük, látogasson el üzletünkbe!"
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="h-px w-20 bg-slate-300"></div>
            <span className="brand-font text-2xl text-slate-400">Onder Papír</span>
            <div className="h-px w-20 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
