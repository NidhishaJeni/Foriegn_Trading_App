package com.example.trading.config;

import com.example.trading.model.Currency;
import com.example.trading.repository.CurrencyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final CurrencyRepository repository;

    public DataLoader(CurrencyRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        if (repository.count() == 0) {

            Currency usd = new Currency();
            usd.setCode("USD");
            usd.setName("US Dollar");
            usd.setRate(83.0);

            Currency eur = new Currency();
            eur.setCode("EUR");
            eur.setName("Euro");
            eur.setRate(91.0);

            Currency gbp = new Currency();
            gbp.setCode("GBP");
            gbp.setName("British Pound");
            gbp.setRate(106.0);

            Currency jpy = new Currency();
            jpy.setCode("JPY");
            jpy.setName("Japanese Yen");
            jpy.setRate(0.57);

            repository.save(usd);
            repository.save(eur);
            repository.save(gbp);
            repository.save(jpy);
        }
    }
}