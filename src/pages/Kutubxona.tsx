import { Layout } from '@/components/Layout';
import { Code2, Palette, Braces, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const libraries = [
  {
    title: 'HTML',
    description: "HTML asoslari va teglar haqida to'liq qo'llanma",
    icon: Code2,
    color: 'text-html',
    gradient: 'gradient-html',
    glow: 'glow-html',
    link: '/kutubxona/html'
  },
  {
    title: 'CSS',
    description: "CSS stillari va dizayn texnikalari bo'yicha qo'llanma",
    icon: Palette,
    color: 'text-css',
    gradient: 'gradient-css',
    glow: 'glow-css',
    link: '/kutubxona/css'
  },
  {
    title: 'JavaScript',
    description: "JavaScript asoslari va ilg'or mavzular bo'yicha qo'llanma",
    icon: Braces,
    color: 'text-js',
    gradient: 'gradient-js',
    glow: 'glow-js',
    link: '/kutubxona/javascript'
  }
];

const Kutubxona = () => {
  return (
    <Layout>
      <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-12 pt-14 sm:pt-16 md:pt-12">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Kutubxona</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Web dasturlash qo'llanmalari</p>
            </div>
          </div>
        </header>

        {/* Library Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {libraries.map((lib, index) => (
            <Link
              key={lib.title}
              to={lib.link}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`card-glass rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] ${lib.glow}`}>
                <div className={`w-14 h-14 rounded-xl ${lib.gradient} flex items-center justify-center mb-4`}>
                  <lib.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${lib.color}`}>{lib.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{lib.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  <span>O'rganishni boshlash</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 card-glass rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-xl font-bold text-foreground mb-4">Kutubxona haqida</h2>
          <p className="text-muted-foreground leading-relaxed">
            Bu kutubxonada HTML, CSS va JavaScript tillarini o'rganish uchun kerakli barcha ma'lumotlar jamlangan.
            Har bir bo'limda tegishli mavzular, misollar va tushuntirishlar berilgan. 
            Qo'llanmalarni o'qib, keyin testlarni yechib, bilimingizni mustahkamlashingiz mumkin.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Kutubxona;
