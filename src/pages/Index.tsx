import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplets" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">СантехПро</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary">Работаем круглосуточно 24/7</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Прочистка канализации 
                <span className="text-primary"> за 30 минут</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное устранение засоров любой сложности. Современное оборудование и опытные специалисты.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={24} className="text-primary" />
                  <span className="font-semibold">Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <span className="font-semibold">Быстрый выезд</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-primary" />
                  <span className="font-semibold">Официальный договор</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('contact')}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('prices')}>
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b5ba9f17-901d-4b11-a30a-1cefef742a8f/files/d2354268-408a-4933-9677-1f58afa7c144.jpg" 
                alt="Профессиональное оборудование" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по прочистке и обслуживанию канализационных систем
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Droplet",
                title: "Прочистка труб",
                description: "Устранение засоров в трубах любого диаметра с помощью профессионального оборудования"
              },
              {
                icon: "Wind",
                title: "Гидродинамическая прочистка",
                description: "Очистка труб под высоким давлением для удаления сложных загрязнений"
              },
              {
                icon: "Wrench",
                title: "Механическая прочистка",
                description: "Использование специальных тросов и спиралей для устранения засоров"
              },
              {
                icon: "Camera",
                title: "Видеодиагностика",
                description: "Осмотр труб видеокамерой для точного определения проблемы"
              },
              {
                icon: "Settings",
                title: "Ремонт систем",
                description: "Замена участков труб и ремонт канализационных систем"
              },
              {
                icon: "ClipboardCheck",
                title: "Профилактика",
                description: "Плановое обслуживание для предотвращения засоров"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b5ba9f17-901d-4b11-a30a-1cefef742a8f/files/3985b8c6-b499-4afd-a395-467a9fc58aa0.jpg" 
                alt="Гарантия качества" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white text-primary">Наши преимущества</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Гарантия на все работы</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "Shield",
                    title: "Официальная гарантия",
                    description: "Предоставляем гарантию до 12 месяцев на выполненные работы"
                  },
                  {
                    icon: "Award",
                    title: "Опытные мастера",
                    description: "Все специалисты имеют сертификаты и стаж работы от 5 лет"
                  },
                  {
                    icon: "Zap",
                    title: "Современное оборудование",
                    description: "Используем профессиональную технику последнего поколения"
                  },
                  {
                    icon: "Clock",
                    title: "Быстрый выезд",
                    description: "Приезжаем в течение 30-60 минут после вызова"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Прозрачные цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость услуг</h2>
            <p className="text-xl text-muted-foreground">
              Фиксированные цены без скрытых доплат
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Базовая",
                price: "от 2 000",
                features: [
                  "Выезд мастера",
                  "Диагностика проблемы",
                  "Механическая прочистка",
                  "Консультация"
                ]
              },
              {
                title: "Стандартная",
                price: "от 4 500",
                popular: true,
                features: [
                  "Всё из базовой",
                  "Гидродинамическая прочистка",
                  "Видеодиагностика",
                  "Гарантия 6 месяцев"
                ]
              },
              {
                title: "Премиум",
                price: "от 8 000",
                features: [
                  "Всё из стандартной",
                  "Комплексная очистка системы",
                  "Профилактические работы",
                  "Гарантия 12 месяцев"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${plan.popular ? 'border-primary border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный выбор
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price} ₽
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection('contact')}
                  >
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят о нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей Иванов",
                role: "Владелец квартиры",
                text: "Отличная работа! Приехали быстро, устранили засор за 20 минут. Цены адекватные, мастер профессионал.",
                rating: 5
              },
              {
                name: "Мария Петрова",
                role: "Управляющая ТСЖ",
                text: "Сотрудничаем постоянно. Всегда качественно и в срок. Рекомендую для обслуживания многоквартирных домов.",
                rating: 5
              },
              {
                name: "Дмитрий Сидоров",
                role: "Владелец ресторана",
                text: "Выполнили сложную прочистку системы канализации. Использовали современное оборудование, дали гарантию.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <img 
              src="https://cdn.poehali.dev/projects/b5ba9f17-901d-4b11-a30a-1cefef742a8f/files/d1956838-04c5-4b55-9ac9-f278e5c6b56f.jpg" 
              alt="Довольные клиенты" 
              className="rounded-2xl shadow-xl max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Нужна срочная помощь?</h2>
            <p className="text-xl mb-8 text-white/90">
              Оставьте заявку и мы перезвоним в течение 5 минут
            </p>
            <div className="bg-white rounded-2xl p-8 text-foreground shadow-2xl">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea 
                placeholder="Опишите проблему (необязательно)" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary mb-6"
              />
              <Button size="lg" className="w-full text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать обратный звонок
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Phone" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-white/90">+7 (999) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Clock" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                <p className="text-white/90">Круглосуточно 24/7</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Зона работы</h3>
                <p className="text-white/90">Москва и область</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Droplets" size={28} />
              <span className="text-xl font-bold">СантехПро</span>
            </div>
            <p className="text-background/80">© 2024 СантехПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
