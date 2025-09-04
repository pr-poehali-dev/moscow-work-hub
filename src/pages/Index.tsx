import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-red-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">Москва</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('opportunities')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Возможности
              </button>
              <button 
                onClick={() => scrollToSection('career')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Карьера
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/842fff55-0865-4779-8a81-9ca6e98df2d0.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
            <span className="text-secondary block mb-2">Твой Город</span>
            <span className="text-primary">Твоё Дело</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Откройте безграничные возможности для профессионального роста в столице России
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 font-bold"
              onClick={() => scrollToSection('career')}
            >
              Найти работу
              <Icon name="ArrowRight" size={24} className="ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold"
              onClick={() => scrollToSection('opportunities')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunities Section with Pattern Elements */}
      <section id="opportunities" className="py-24 bg-white relative">
        {/* Pattern decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/842fff55-0865-4779-8a81-9ca6e98df2d0.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl font-black text-secondary mb-8">Возможности</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Москва предлагает уникальные возможности для развития карьеры в различных сферах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Building2" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Финансы</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ведущие банки, инвестиционные фонды и финтех компании
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Code2" size={48} className="mx-auto text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT & Tech</h3>
                <p className="text-gray-600 leading-relaxed">
                  Инновационные стартапы и крупные технологические корпорации
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Users" size={48} className="mx-auto text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Консалтинг</h3>
                <p className="text-gray-600 leading-relaxed">
                  Международные консалтинговые компании и управленческие позиции
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats with red accent background */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black mb-4">12.5М</div>
                <div className="text-xl font-medium opacity-90">Населения</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-4">2000+</div>
                <div className="text-xl font-medium opacity-90">IT компаний</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-4">150+</div>
                <div className="text-xl font-medium opacity-90">Банков</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-4">№1</div>
                <div className="text-xl font-medium opacity-90">По зарплатам</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Построй карьеру</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Москва — это место, где амбиции встречаются с возможностями. 
                Здесь каждый день открываются новые горизонты для профессионального роста.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Высокие зарплаты</h4>
                    <p className="text-gray-600">Средняя зарплата в IT — от 200,000 ₽</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Развитая инфраструктура</h4>
                    <p className="text-gray-600">Метро, коворкинги, бизнес-центры</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Культурная столица</h4>
                    <p className="text-gray-600">Театры, музеи, события мирового уровня</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('contact')}
              >
                Связаться с нами
                <Icon name="MessageCircle" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src="/img/53932466-e272-4794-b0d1-997625d08a70.jpg" 
                alt="Office workspace" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-gray-600">Удовлетворенность работой</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Pattern Background */}
      <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Full pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/842fff55-0865-4779-8a81-9ca6e98df2d0.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black mb-10">Начни карьеру в Москве</h2>
          <p className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed opacity-90">
            Готовы сделать следующий шаг? Свяжитесь с нами и узнайте о доступных возможностях
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <Icon name="Mail" size={28} className="text-primary" />
              <span className="text-xl font-medium">career@moscow.ru</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <Icon name="Phone" size={28} className="text-primary" />
              <span className="text-xl font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <Icon name="MapPin" size={28} className="text-primary" />
              <span className="text-xl font-medium">Москва, Россия</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 font-bold"
          >
            Отправить резюме
            <Icon name="Send" size={24} className="ml-3" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-gray-600 text-center border-t border-red-100">
        <div className="container mx-auto px-6">
          <p className="text-lg font-medium">&copy; 2024 Твой Город - Твоё Дело. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;