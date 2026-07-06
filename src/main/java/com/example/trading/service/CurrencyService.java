package com.example.trading.service;

import com.example.trading.model.Currency;
import com.example.trading.repository.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyService {

    @Autowired
    private CurrencyRepository repository;

    public Currency addCurrency(Currency currency){
        return repository.save(currency);
    }

    public List<Currency> getAllCurrencies(){
        return repository.findAll();
    }

    public Currency updateRate(String code,double rate){

        Currency currency = repository.findByCode(code);

        if(currency==null){
            throw new RuntimeException("Currency not found");
        }

        currency.setRate(rate);

        return repository.save(currency);
    }

    public void deleteCurrency(Long id){
        repository.deleteById(id);
    }
    public Currency getCurrencyByCode(String code) {

    Currency currency = repository.findByCode(code);

    if (currency == null) {
        throw new RuntimeException("Currency Not Found");
    }

    return currency;
}

}