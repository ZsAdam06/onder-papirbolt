import React, { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { Post } from '../types';

const CATEGORIES = ['Összes', 'Írószer', 'Papíráru', 'Rajzeszköz', 'Iskolaszer', 'Irodaszer', 'Kreatív', 'Egyéb'];
const PAGE_SIZE = 8;

const Lightbox: React.FC<{ images: string[]; startIdx: number; title: string; onClose: () => void; returnFocusRef: React.RefObject<HTMLElement> }> = ({ images, startIdx, title, onClose, returnFocusRef }) => {
  const [idx, setIdx] = useState(startIdx);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
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
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      returnFocusRef.current?.focus();
    };
  }, [images, prev, next, onClose, returnFocusRef]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="bg-black flex flex-col w-full h-full sm:h-auto sm:max-w-2xl sm:max-h-[90vh] sm:rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-white/10">
          <p className="text-white font-bold truncate text-sm">{title}</p>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">{idx + 1} / {images.length}</span>
            <button ref={closeBtnRef} onClick={onClose} aria-label="Bezárás" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <i className="fas fa-times text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-grow overflow-hidden px-10 py-4">
          <img
            key={idx}
            src={images[idx]}
            alt={title}
            className="max-h-full max-w-full sm:max-h-[55vh] object-contain sm:rounded-lg"
          />
          {images.length > 1 && (
            <>
              <button onClick={prev} aria-label="Előző kép" className="absolute left-2 w-9 h-9 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <i className="fas fa-chevron-left text-sm" aria-hidden="true"></i>
              </button>
              <button onClick={next} aria-label="Következő kép" className="absolute right-2 w-9 h-9 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <i className="fas fa-chevron-right text-sm" aria-hidden="true"></i>
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 justify-center py-3 px-4 overflow-x-auto flex-shrink-0 border-t border-white/10">
            {images.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`${i + 1}. kép megjelenítése`} aria-current={i === idx}
                className={`w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${i === idx ? 'border-teal-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`}>
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
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-label={`${post.title} – kép megnyitása${images.length > 1 ? ` (${images.length} kép)` : ''}`}
        className="group relative overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full border border-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
        onClick={() => setLightboxOpen(true)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxOpen(true); } }}
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
        <Lightbox images={images} startIdx={0} title={post.title} onClose={() => setLightboxOpen(false)} returnFocusRef={cardRef} />
      )}
    </>
  );
};

const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
    <div className="aspect-[3/4] bg-slate-200"></div>
    <div className="p-6 space-y-3">
      <div className="h-5 bg-slate-200 rounded-full w-3/4 mx-auto"></div>
      <div className="h-3 bg-slate-100 rounded-full w-1/2 mx-auto"></div>
    </div>
  </div>
);

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/p/ONDER-Pap%C3%ADr-100063292235639/';

const FacebookEmbed: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="w-full max-w-lg bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-5 p-10 text-center">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
          <i className="fab fa-facebook text-teal-600 text-3xl" aria-hidden="true"></i>
        </div>
        <p className="text-slate-600">Kövesse legfrissebb híreinket és akcióinkat Facebook-oldalunkon!</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setLoaded(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <i className="fab fa-facebook mr-2" aria-hidden="true"></i>Idővonal betöltése
          </button>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors text-sm"
          >
            <i className="fas fa-external-link-alt mr-2" aria-hidden="true"></i>Megnyitás Facebookon
          </a>
        </div>
        <p className="text-slate-400 text-xs max-w-xs">
          Az idővonal betöltésekor a Facebook (Meta) adatait is elfogadja. Részletek az{' '}
          <a href="#/adatvedelem" className="underline hover:text-slate-600">Adatvédelmi tájékoztatóban</a>.
        </p>
      </div>
    );
  }

  return (
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
  );
};

const Magazine: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Összes');

  const fetchPage = useCallback(async (page: number) => {
    let query = supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);
    if (activeCategory !== 'Összes') query = query.eq('category', activeCategory);
    const { data } = await query;
    return data ?? [];
  }, [activeCategory]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchPage(0).then(data => {
      if (cancelled) return;
      setPosts(data);
      setHasMore(data.length === PAGE_SIZE);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [fetchPage]);

  const loadMore = async () => {
    setLoadingMore(true);
    const nextPage = Math.floor(posts.length / PAGE_SIZE);
    const data = await fetchPage(nextPage);
    setPosts(prev => [...prev, ...data]);
    setHasMore(data.length === PAGE_SIZE);
    setLoadingMore(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 text-xl italic brand-font mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Legújabb termékek
          </p>
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
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24">
            <i className="fas fa-box-open text-5xl text-slate-300 mb-4 block"></i>
            <p className="text-slate-400 text-lg">Nincs bejegyzés ebben a kategóriában.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-in fade-in slide-in-from-bottom-12 duration-700"
                  style={{ animationDelay: `${(index % PAGE_SIZE) * 80}ms` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="bg-white text-teal-700 border border-teal-200 px-8 py-3.5 rounded-full font-bold hover:bg-teal-50 transition-all shadow-sm disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  {loadingMore ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></span>
                      Betöltés...
                    </span>
                  ) : 'Több termék betöltése'}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Facebook section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <i className="fab fa-facebook text-teal-600" aria-hidden="true"></i>
            Kövess minket Facebookon!
          </h2>
          <FacebookEmbed />
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
