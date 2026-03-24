const { useState } = React;

const Header = () => (
    <header>
        <div className="logo">РКК<span>.</span></div>
        <nav className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#contacts">Контакты</a>
        </nav>
        <button className="btn-primary" onClick={() => document.getElementById('contacts').scrollIntoView({behavior: 'smooth'})}>Заказать звонок</button>
    </header>
);

const Hero = () => (
    <section className="hero">
        <h1>Точные кадастровые решения для вашего бизнеса и дома</h1>
        <p>Комплексные услуги по межеванию, техническому учету и топографической съемке. Гарантия точности и соблюдение сроков.</p>
        <button className="btn-primary" style={{fontSize: '18px', padding: '15px 30px'}} onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}>Наши услуги</button>
    </section>
);

const Services = () => {
    const services = [
        { title: "Межевание участков", desc: "Уточнение границ земельных участков, раздел, объединение и перераспределение." },
        { title: "Технический план", desc: "Подготовка техплана для зданий, сооружений, помещений и объектов незавершенного строительства." },
        { title: "Топографическая съемка", desc: "Создание топографических планов различных масштабов для проектирования и строительства." },
        { title: "Акт обследования", desc: "Подготовка документа для снятия объекта капитального строительства с кадастрового учета." },
        { title: "Вынос границ в натуру", desc: "Закрепление границ участка на местности с высокой точностью спутниковым оборудованием." },
        { title: "Юридическое сопровождение", desc: "Помощь в оформлении недвижимости и разрешении кадастровых споров." }
    ];

    return (
        <section id="services" className="section">
            <h2 className="section-title">Наши услуги</h2>
            <div className="services-grid">
                {services.map((s, i) => (
                    <div key={i} className="service-card">
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Calculator = () => {
    const [service, setService] = useState('mezhevanie');
    const [area, setArea] = useState('');

    const prices = {
        mezhevanie: { base: 12000, perSqm: 5 },
        techplan: { base: 10000, perSqm: 15 },
        topo: { base: 15000, perSqm: 20 }
    };

    const calculate = () => {
        if (!area || area <= 0) return 0;
        const s = prices[service];
        return s.base + (area * s.perSqm);
    };

    return (
        <section id="calculator" className="section" style={{backgroundColor: '#f8f9fa'}}>
            <h2 className="section-title">Предварительный расчет</h2>
            <div className="calc-container">
                <div className="form-group">
                    <label>Тип услуги</label>
                    <select value={service} onChange={e => setService(e.target.value)}>
                        <option value="mezhevanie">Межевание земельного участка</option>
                        <option value="techplan">Технический план здания</option>
                        <option value="topo">Топографическая съемка</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Площадь (кв.м)</label>
                    <input type="number" placeholder="Например: 600" value={area} onChange={e => setArea(e.target.value)} />
                </div>
                <div className="calc-result">
                    Ориентировочная стоимость: <br/>
                    {calculate() > 0 ? calculate().toLocaleString('ru-RU') + ' руб.' : 'Введите площадь'}
                </div>
                <p style={{textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#666'}}>*Не является публичной офертой</p>
            </div>
        </section>
    );
};

const Contacts = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="contacts" className="section">
            <h2 className="section-title">Свяжитесь с нами</h2>
            <div className="contact-grid">
                <div>
                    <h3>Центральный офис</h3>
                    <p style={{marginTop: '20px'}}><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 10, офис 42</p>
                    <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                    <p><strong>Email:</strong> info@rkk-kadastr.ru</p>
                    <p><strong>Режим работы:</strong> Пн-Пт: 9:00 - 18:00</p>
                </div>
                <div>
                    {sent ? (
                        <div style={{padding: '30px', background: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', textAlign: 'center'}}>
                            <h3>Спасибо за заявку!</h3>
                            <p>Наш специалист свяжется с вами в течение 15 минут.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Ваше имя" required />
                            <input type="tel" placeholder="Телефон" required />
                            <textarea placeholder="Опишите вашу задачу" required></textarea>
                            <button type="submit" className="btn-primary">Отправить заявку</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="footer">
        <div className="logo" style={{color: 'white', marginBottom: '20px'}}>РКК<span>.</span></div>
        <p>&copy; 2026 Кадастровая компания "РКК". Все права защищены.</p>
    </footer>
);

const App = () => (
    <div>
        <Header />
        <Hero />
        <Services />
        <Calculator />
        <Contacts />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
