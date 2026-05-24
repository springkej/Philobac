import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Layers, User, Sparkles } from 'lucide-react';
import { subjects, NOTIONS } from './data';
import { Subject, ExamType, Notion } from './types';

// Geometric Balance Specific Badges Mapping
const NOTION_COLORS: Record<Notion, string> = {
  "L'art": "bg-blue-50 text-blue-600 border-blue-100",
  "Le bonheur": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "La conscience": "bg-purple-50 text-purple-600 border-purple-100",
  "Le devoir": "bg-orange-50 text-orange-600 border-orange-100",
  "L'État": "bg-rose-50 text-rose-600 border-rose-100",
  "L'inconscient": "bg-amber-50 text-amber-600 border-amber-100",
  "La justice": "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Le langage": "bg-cyan-50 text-cyan-600 border-cyan-100",
  "La liberté": "bg-sky-50 text-sky-600 border-sky-100",
  "La nature": "bg-green-50 text-green-600 border-green-100",
  "La raison": "bg-teal-50 text-teal-600 border-teal-100",
  "La religion": "bg-violet-50 text-violet-600 border-violet-100",
  "La science": "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100",
  "La technique": "bg-red-50 text-red-600 border-red-100",
  "Le temps": "bg-slate-100 text-slate-500 border-slate-200",
  "Le travail": "bg-yellow-50 text-yellow-600 border-yellow-100",
  "La vérité": "bg-pink-50 text-pink-600 border-pink-100",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ExamType>('Annale');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNotions, setSelectedNotions] = useState<Set<Notion>>(new Set());
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  // Filter Logic
  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      // 1. Tab Match
      if (subject.type !== activeTab) return false;

      // 1.5 Year Match
      if (selectedYear !== 'all') {
        if (subject.year?.toString() !== selectedYear) return false;
      }

      // 2. Search Match
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        subject.title.toLowerCase().includes(query) ||
        subject.location?.toLowerCase().includes(query) ||
        subject.year?.toString().includes(query);
      if (!matchesSearch) return false;

      // 3. Notion Match
      if (selectedNotions.size > 0) {
        const hasMatchingNotion = subject.notions.some((n) =>
          selectedNotions.has(n)
        );
        if (!hasMatchingNotion) return false;
      }

      return true;
    });
  }, [activeTab, searchQuery, selectedNotions, selectedYear]);

  const toggleNotion = (notion: Notion) => {
    const next = new Set(selectedNotions);
    if (next.has(notion)) {
      next.delete(notion);
    } else {
      next.add(notion);
    }
    setSelectedNotions(next);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#F9FAFB] font-sans text-slate-800 overflow-hidden selection:bg-slate-200">
      
      {/* Sidebar - Desktop */}
      <aside className="w-full lg:w-64 bg-white border-r border-slate-200 flex flex-col h-auto lg:h-full shrink-0 z-20 overflow-y-auto hidden lg:flex">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-serif">Φ</div>
            PhiloBac
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-8 overflow-y-auto pb-6 custom-scrollbar">
          
          {/* Navigation / Tabs */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">Navigation</p>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => { setActiveTab('Annale'); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'Annale' ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-500 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Explorer les annales
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('Potentiel'); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'Potentiel' ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-500 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Sujets potentiels
                </button>
              </li>
            </ul>
          </div>

          {/* Filter by Notion */}
          <div>
            <div className="flex items-center justify-between mb-3 px-2">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold m-0">Notions ({NOTIONS.length})</p>
              {selectedNotions.size > 0 && (
                <button onClick={() => setSelectedNotions(new Set())} className="text-[10px] text-slate-500 hover:text-slate-800 font-bold uppercase transition-colors">
                  Vider
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1 px-2">
              {NOTIONS.map((notion) => {
                const isSelected = selectedNotions.has(notion);
                return (
                  <button
                    key={notion}
                    onClick={() => toggleNotion(notion)}
                    className={`px-2 py-1 text-[10px] font-bold rounded border transition-all ${
                      isSelected 
                        ? 'border-slate-900 bg-slate-900 text-white shadow-sm' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {notion}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">Filtre Temporel</p>
            <div className="px-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-sm rounded-md py-2 px-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all font-medium appearance-none"
              >
                <option value="all">Toutes les années</option>
                <option value="2026">Session 2026</option>
                <option value="2025">Session 2025</option>
                <option value="2024">Session 2024</option>
                <option value="2023">Session 2023</option>
                <option value="2022">Session 2022</option>
                <option value="2021">Session 2021</option>
              </select>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white border-r border-slate-200 flex flex-col z-50 overflow-y-auto lg:hidden p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-serif">Φ</div>
                  PhiloBac
                </h1>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-900 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8 pb-10">
                {/* Mobile Navigation */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Navigation</p>
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => { setActiveTab('Annale'); setIsMobileMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          activeTab === 'Annale' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-500 font-medium'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                        Explorer les annales
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { setActiveTab('Potentiel'); setIsMobileMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          activeTab === 'Potentiel' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-500 font-medium'
                        }`}
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Sujets potentiels
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Mobile Notion Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold m-0">Notions ({NOTIONS.length})</p>
                    {selectedNotions.size > 0 && (
                      <button onClick={() => setSelectedNotions(new Set())} className="text-[10px] text-slate-500 hover:text-slate-800 font-bold uppercase transition-colors">
                        Vider
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {NOTIONS.map((notion) => {
                      const isSelected = selectedNotions.has(notion);
                      return (
                        <button
                          key={`mob-${notion}`}
                          onClick={() => toggleNotion(notion)}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded border transition-all ${
                            isSelected 
                              ? 'border-slate-900 bg-slate-900 text-white' 
                              : 'bg-white text-slate-500 border-slate-200'
                          }`}
                        >
                          {notion}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Year Filter */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Filtre Temporel</p>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-sm rounded-md py-2.5 px-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 font-medium"
                  >
                    <option value="all">Toutes les années</option>
                    <option value="2026">Session 2026</option>
                    <option value="2025">Session 2025</option>
                    <option value="2024">Session 2024</option>
                    <option value="2023">Session 2023</option>
                    <option value="2022">Session 2022</option>
                    <option value="2021">Session 2021</option>
                  </select>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full lg:overflow-hidden relative">
        
        {/* Mobile Header (replaces sidebar top on mobile) */}
        <header className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="mr-1 p-1 rounded hover:bg-slate-100 text-slate-700 font-bold flex items-center gap-1 text-sm border border-slate-200"
            >
              ☰ <span className="text-[10px] uppercase tracking-wide font-sans">Filtres</span>
            </button>
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px] font-serif">Φ</div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">PhiloBac</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('Annale')} className={`px-3 py-1.5 rounded text-xs font-bold ${activeTab === 'Annale' ? 'bg-slate-100 text-slate-900' : 'text-slate-500'}`}>Annales</button>
            <button onClick={() => setActiveTab('Potentiel')} className={`px-3 py-1.5 rounded text-xs font-bold ${activeTab === 'Potentiel' ? 'bg-amber-100 text-amber-700' : 'text-slate-500'}`}>Potentiels</button>
          </div>
        </header>

        {/* Top Header Panel (Desktop) */}
        <header className="hidden lg:flex h-16 bg-white border-b border-slate-200 items-center justify-between px-8 shrink-0 z-10 w-full relative">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un sujet, une notion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
               Mode Examen
             </button>
          </div>
        </header>

        {/* Search & Filter Bar for Mobile (Since top bar search is desktop-only) */}
        <div className="p-4 bg-white border-b border-slate-100 lg:hidden flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher sujet/notion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-100 border-transparent rounded-lg text-xs text-slate-900 outline-none"
            />
          </div>
          {selectedYear !== 'all' && (
            <button 
              onClick={() => setSelectedYear('all')}
              className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-slate-200"
            >
              Ans: {selectedYear} ✕
            </button>
          )}
          {selectedNotions.size > 0 && (
            <button 
              onClick={() => setSelectedNotions(new Set())}
              className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-slate-200"
            >
              Notions ({selectedNotions.size}) ✕
            </button>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative">
          
          {/* Section Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-2 gap-4">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              {activeTab === 'Annale' ? 'Dernières annales & archives' : 'Sujets probables (Inédits)'}
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[11px] font-medium text-slate-600 shadow-sm">{filteredSubjects.length} résultats</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-start">
            <AnimatePresence>
              {filteredSubjects.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="col-span-full p-8 text-center border border-slate-200 border-dashed rounded-xl bg-white/50"
                >
                  <p className="text-sm font-medium text-slate-500">Aucun sujet ne correspond à votre recherche.</p>
                </motion.div>
              ) : (
                filteredSubjects.map((subject) => (
                  <SubjectCard 
                    key={subject.id} 
                    subject={subject} 
                    onViewPistes={(sub) => setSelectedSubject(sub)}
                  />
                ))
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Modern Study Detail Panel Modal (Geometric Balance Style) */}
      <AnimatePresence>
        {selectedSubject && selectedSubject.ideas && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-md select-none"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedSubject(null)} />

            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border-4 border-slate-900 shadow-2xl overflow-hidden flex flex-col z-10 max-h-[90vh]"
            >
              {/* Main Content of dark panel */}
              <div className="flex-1 p-6 md:p-8 text-white overflow-y-auto custom-scrollbar">
                
                {/* Panel Header */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded border border-amber-500/30">
                        Focus {selectedSubject.type === 'Potentiel' ? 'Sujet Potentiel' : 'Annale'}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">
                        {selectedSubject.year && `${selectedSubject.year}`} {selectedSubject.location && `• ${selectedSubject.location}`}
                      </span>
                    </div>
                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedSubject.notions.map(n => (
                        <span key={n} className="px-1.5 py-0.5 text-[9px] font-bold bg-white/5 text-slate-300 rounded border border-white/10">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSubject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center justify-center w-8 h-8 self-start border border-white/10"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="text-xl md:text-2xl font-serif italic mb-8 text-white leading-relaxed">
                  « {selectedSubject.title} »
                </h3>

                {/* Grid Layout inside the dark panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {/* Problématique */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-1.5 border-b border-white/5 pb-2">
                      <Compass className="w-3.5 h-3.5 text-amber-500"/> Problématique
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300 font-medium">
                      {selectedSubject.ideas.problematica}
                    </p>
                  </div>
                  
                  {/* Auteurs Clés */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-1.5 border-b border-white/5 pb-2">
                      <User className="w-3.5 h-3.5 text-amber-500"/> Auteurs Clés
                    </p>
                    <ul className="text-sm space-y-2 text-slate-300 font-medium">
                      {selectedSubject.ideas.authors.map(author => (
                        <li key={author} className="flex items-start gap-2">
                          <span className="text-amber-500">•</span>
                          <span className="text-white">{author}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan suggéré */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-1.5 border-b border-white/5 pb-2">
                      <Layers className="w-3.5 h-3.5 text-amber-500"/> Plan suggéré
                    </p>
                    <div className="space-y-3.5 text-xs">
                      <div className="flex gap-2">
                        <span className="text-amber-500 font-bold shrink-0">I.</span> 
                        <span className="text-slate-300 leading-snug">
                          <strong className="text-white mr-1">Thèse :</strong>{selectedSubject.ideas.plan.these}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-amber-500 font-bold shrink-0">II.</span> 
                        <span className="text-slate-300 leading-snug">
                          <strong className="text-white mr-1">Antithèse :</strong>{selectedSubject.ideas.plan.antithese}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-amber-500 font-bold shrink-0">III.</span> 
                        <span className="text-slate-300 leading-snug">
                          <strong className="text-white mr-1">Synthèse :</strong>{selectedSubject.ideas.plan.synthese}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer row inside the dark panel */}
              <div className="p-4 bg-slate-950 border-t border-white/5 flex justify-end gap-2 shrink-0">
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Fermer la fiche
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------------------
// Component: SubjectCard
// -------------------------------------------------------------
interface SubjectCardProps {
  subject: Subject;
  onViewPistes: (subject: Subject) => void;
  key?: React.Key;
}

function SubjectCard({ subject, onViewPistes }: SubjectCardProps) {
  const isPotentiel = subject.type === 'Potentiel';
  const hasPistes = !!subject.ideas;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.15 }}
      className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-3 gap-2">
        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex-1 mt-0.5">
          {subject.year && <span>{subject.year}</span>}
          {subject.year && subject.location && <span> • </span>}
          {subject.location && <span>{subject.location}</span>}
        </span>
        <span className={`px-2 py-0.5 text-[10px] font-bold rounded shrink-0 ${isPotentiel ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
          {subject.type}
        </span>
      </div>
      
      <h3 className="text-[1.05rem] md:text-[1.125rem] font-semibold leading-relaxed mb-4 text-slate-800 italic grow">
        « {subject.title} »
      </h3>
      
      <div className="flex flex-col gap-4 mt-auto border-t border-slate-50 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {subject.notions.map((n) => (
            <span key={n} className={`px-2 py-0.5 text-[10px] font-bold rounded border ${NOTION_COLORS[n] || 'bg-slate-100 text-slate-500 border-slate-200'}`}>
              {n}
            </span>
          ))}
        </div>
        
        {hasPistes && (
          <button
            onClick={() => onViewPistes(subject)}
            className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
          >
            Voir les pistes ↗
          </button>
        )}
      </div>
    </motion.div>
  );
}


