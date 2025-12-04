import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Code2, Palette, Braces, ArrowRight, Sparkles, BookOpen, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Code2,
    title: 'HTML Testlar',
    description: "100 ta savol bilan HTML bilimingizni sinang. Teglar, atributlar va semantik belgilash.",
    to: '/html',
    color: 'html',
    gradient: 'gradient-html',
    glow: 'glow-html',
  },
  {
    icon: Palette,
    title: 'CSS Testlar',
    description: "100 ta savol bilan CSS mahoratingizni oshiring. Flexbox, Grid, animatsiyalar.",
    to: '/css',
    color: 'css',
    gradient: 'gradient-css',
    glow: 'glow-css',
  },
  {
    icon: Braces,
    title: 'JavaScript Testlar',
    description: "100 ta savol va 80 ta algoritm. Asoslardan zamonaviy ES6+ gacha.",
    to: '/javascript',
    color: 'js',
    gradient: 'gradient-js',
    glow: 'glow-js',
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen p-6 md:p-12">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Web dasturlash platformasi</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">CodeQuiz</span>
            <br />
            <span className="text-foreground">Bilimingizni sinang</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            HTML, CSS va JavaScript bo'yicha 300 ta test savollari va 80 ta algoritm mashqlari bilan 
            web dasturlash ko'nikmalaringizni rivojlantiring.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/html"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-html text-primary-foreground font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Boshlash
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/javascript"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold transition-all hover:bg-secondary/80"
            >
              <BookOpen className="w-4 h-4" />
              Algoritmlar
            </Link>
          </div>
        </header>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Link
              key={feature.to}
              to={feature.to}
              className={cn(
                "glass-card p-6 rounded-xl border border-border group transition-all duration-300 hover:scale-[1.02]",
                feature.glow
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                feature.gradient
              )}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                Boshlash
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </section>

        {/* Stats Section */}
        <section className="glass-card p-8 rounded-xl border border-border mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-html mb-2">100</div>
              <div className="text-muted-foreground">HTML savollari</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-css mb-2">100</div>
              <div className="text-muted-foreground">CSS savollari</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-js mb-2">100</div>
              <div className="text-muted-foreground">JS savollari</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">80</div>
              <div className="text-muted-foreground">Algoritmlar</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="glass-card p-8 rounded-xl border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full gradient-js flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">Sayt haqida</h2>
              <p className="text-muted-foreground mb-4">
                Bu platforma web dasturlashni o'rganayotgan va bilimlarini sinashni xohlovchilar uchun yaratilgan. 
                Har bir test savoli amaliy bilimlarni tekshirishga qaratilgan.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Imkoniyatlar:</strong> Progress avtomatik saqlanadi, 
                saytdan chiqib qayta kirganingizda ham barcha natijalaringiz saqlanib qoladi. 
                Xato qilgan savollaringizni qayta ishlashingiz mumkin.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Yaratuvchi:</span> Salimov Yosinxon
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="text-foreground font-medium">Texnologiyalar:</span> React, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
