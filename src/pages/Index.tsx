import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Москва</div>
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
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/c24d0a6b-6665-410b-a914-40a944a03e29.jpg" 
            alt="Moscow skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/10"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Твоя карьера<br />
            <span className="text-primary">в Москве</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте безграничные возможности для профессионального роста в столице России
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300"
              onClick={() => scrollToSection('career')}
            >
              Найти работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full border-2 border-gray-300 hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection('opportunities')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Возможности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Москва предлагает уникальные возможности для развития карьеры в различных сферах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Building2" size={48} className="mx-auto text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Финансы</h3>
                <p className="text-gray-600 leading-relaxed">
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

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12.5М</div>
              <div className="text-gray-600">Населения</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-gray-600">IT компаний</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Банков</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">№1</div>
              <div className="text-gray-600">По зарплатам</div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Начни карьеру в Москве</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Готовы сделать следующий шаг? Свяжитесь с нами и узнайте о доступных возможностях
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={24} className="text-primary" />
              <span className="text-lg">career@moscow.ru</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={24} className="text-primary" />
              <span className="text-lg">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="text-lg">Москва, Россия</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90"
          >
            Отправить резюме
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Карьера в Москве. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;