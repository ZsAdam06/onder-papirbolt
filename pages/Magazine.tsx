import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Post } from '../types';

const CATEGORIES = ['Összes', 'Írószer', 'Papíráru', 'Rajzeszköz', 'Iskolaszer', 'Irodaszer', 'Kreatív', 'Egyéb'];

const Lightbox: React.FC<{ images: string[]; startIdx: number; title: string; onClose: () => void }> = ({ images, startIdx, title, onClose }) => {
  const [idx, setIdx] = useState(startIdx);
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    images.forEach(src => { const img = new Image(); img.src = src; });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [images, prev, next, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-black rounded-2xl overflow-hidden flex flex-col w-full max-w-2xl max-h-[90vh] shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-white/10">
          <p className="text-white font-bold truncate text-sm">{title}</p>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">{idx + 1} / {images.length}</span>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-grow overflow-hidden px-10 py-4">
          <img
            key={idx}
            src={images[idx]}
            alt={title}
            className="max-h-[55vh] max-w-full object-contain rounded-lg"
          />
          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 w-9 h-9 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors">
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button onClick={next} className="absolute right-2 w-9 h-9 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors">
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 justify-center py-3 px-4 overflow-x-auto flex-shrink-0 border-t border-white/10">
            {images.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${i === idx ? 'border-teal-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`}>
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const images = post.image_urls?.length ? post.image_urls : [post.image_url];
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full border border-slate-100 cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={images[0]}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-md px-3 py-1 rounded-full text-xs font-bold text-teal-600 uppercase tracking-widest">
            {post.category}
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <i className="fas fa-images text-xs"></i>
              {images.length} kép
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{post.title}</h3>
          {post.description && (
            <p className="text-slate-500 text-sm mb-4 flex-grow italic">"{post.description}"</p>
          )}
          <p className="text-xs text-slate-400 mt-auto pt-4 border-t border-slate-100">
            {new Date(post.created_at).toLocaleDateString('hu-HU')}
          </p>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox images={images} startIdx={0} title={post.title} onClose={() => setLightboxOpen(false)} />
      )}
    </>
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
