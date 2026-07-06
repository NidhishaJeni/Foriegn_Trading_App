package com.example.trading.controller;

import com.example.trading.model.Currency;
import com.example.trading.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/currency")
@CrossOrigin(origins="*")
public class CurrencyController {

    @Autowired
    private CurrencyService service;

    @PostMapping
    public Currency add(@RequestBody Currency currency){
        return service.addCurrency(currency);
    }

    @GetMapping
    public List<Currency> getAll(){
        return service.getAllCurrencies();
    }
    @GetMapping("/{code}")
public Currency getCurrency(@PathVariable String code) {
    return service.getCurrencyByCode(code);
}
    @PutMapping("/update/{code}")
    public Currency update(@PathVariable String code,
                           @RequestBody Map<String,Double> body){

        return service.updateRate(code,body.get("rate"));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteCurrency(id);
    }

}