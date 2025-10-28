import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Zap",
      title: "Автоэлектрик с выездом",
      description: "Диагностика и ремонт электрики легковых автомобилей на месте поломки"
    },
    {
      icon: "Truck",
      title: "Грузовой автоэлектрик с выездом",
      description: "Профессиональный ремонт электрооборудования грузовых автомобилей с выездом"
    },
    {
      icon: "Wrench",
      title: "Автомеханик с выездом",
      description: "Механический ремонт и техническое обслуживание на дороге"
    },
    {
      icon: "AlertCircle",
      title: "Техпомощь грузовым",
      description: "Экстренная помощь грузовому транспорту 24/7 по всей области"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "24/7",
      description: "Круглосуточная помощь без выходных"
    },
    {
      icon: "MapPin",
      title: "+300 км",
      description: "Волгоград и вся область"
    },
    {
      icon: "Truck",
      title: "Грузовые авто",
      description: "Специализация на тяжелой технике"
    },
    {
      icon: "ThumbsUp",
      title: "Опыт",
      description: "Профессиональные автоэлектрики"
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:+79776634893";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/79776634893", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-secondary" size={28} />
            <span className="text-xl font-bold text-primary-foreground">АвтоЭлектрик</span>
          </div>
          <Button 
            onClick={handleCall}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="Clock" size={18} />
            <span className="font-semibold">Работаем 24/7</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Автоэлектрик<br />
            <span className="text-secondary">для грузовых и легковых авто</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Техпомощь на дороге в Волгограде и области. Выезд до 300 км. Профессиональный ремонт электрики грузовых автомобилей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={handleCall}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Icon name="PhoneCall" size={24} className="mr-2" />
              8 977 663 48 93
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 pb-6">
                  <Icon name={advantage.icon as any} className="text-secondary mx-auto mb-3" size={40} />
                  <h3 className="font-bold text-2xl mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту электрооборудования грузовых автомобилей
            </p>
          </div>
          
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/d3224631-cb83-40c7-b6df-38f573861eee.jpg" 
              alt="Грузовой автоэлектрик - техпомощь на дороге"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon name={service.icon as any} className="text-secondary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход и гарантия качества на все виды работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Опыт и профессионализм</h3>
                <p className="text-muted-foreground">
                  Многолетний опыт работы с электрооборудованием грузовых и легковых автомобилей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Быстрый выезд</h3>
                <p className="text-muted-foreground">
                  Прибываем на место в течение 30-60 минут после вызова, работаем круглосуточно
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Tool" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Полное оснащение</h3>
                <p className="text-muted-foreground">
                  Современное диагностическое оборудование и все необходимые инструменты
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="ShieldCheck" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Предоставляем гарантию на все виды выполненных работ и установленные запчасти
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Wallet" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Честные цены</h3>
                <p className="text-muted-foreground">
                  Прозрачное ценообразование, никаких скрытых платежей и доплат
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Широкая география</h3>
                <p className="text-muted-foreground">
                  Выезжаем по всей Волгоградской области в радиусе до 300 км
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <Icon name="MapPin" className="mx-auto mb-6 text-secondary" size={56} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Зона покрытия</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Выезжаем по всему Волгограду и Волгоградской области. Радиус выезда до 300 км от города. 
            Быстрое прибытие на место поломки в любое время суток.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              Волгоград
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              Волжский
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              Городище
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              Краснослободск
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              Вся область
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Нужна помощь прямо сейчас?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Звоните в любое время — мы работаем круглосуточно без выходных
          </p>
          <Button 
            onClick={handleCall}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all animate-scale-in"
          >
            <Icon name="Phone" size={32} className="mr-3" />
            8 977 663 48 93
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-secondary" size={32} />
            <span className="text-2xl font-bold">АвтоЭлектрик</span>
          </div>
          <p className="text-lg mb-4">Автоэлектрик для грузовых автомобилей</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+79776634893" className="text-xl font-semibold hover:text-secondary transition-colors">
              <Icon name="Phone" size={20} className="inline mr-2" />
              8 977 663 48 93
            </a>
            <a 
              href="https://wa.me/79776634893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-green-400 transition-colors flex items-center"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </a>
          </div>
          <p className="text-sm opacity-70">
            Волгоград и Волгоградская область • Круглосуточно 24/7 • Выезд до 300 км
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;