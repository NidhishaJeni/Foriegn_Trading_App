package com.example.trading.controller;

import com.example.trading.model.Trade;
import com.example.trading.model.User;
import com.example.trading.repository.TradeRepository;
import com.example.trading.repository.UserRepository;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/trades")
@CrossOrigin("*")
public class TradeController {

    private final TradeRepository tradeRepo;
    private final UserRepository userRepo;

    public TradeController(TradeRepository tradeRepo,
                           UserRepository userRepo) {

        this.tradeRepo = tradeRepo;
        this.userRepo = userRepo;
    }

    // CREATE TRADE
    @PostMapping("/{userId}")
    public Trade createTrade(@PathVariable Long userId,
                             @RequestBody Trade trade) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // BUY
        if ("BUY".equalsIgnoreCase(trade.getTradeType())) {

            if (user.getWallet() < trade.getAmount()) {
                throw new RuntimeException("Insufficient Wallet Balance");
            }

            user.setWallet(user.getWallet() - trade.getAmount());

        }

        // SELL
        else if ("SELL".equalsIgnoreCase(trade.getTradeType())) {

            user.setWallet(user.getWallet() + trade.getAmount());

        }

        userRepo.save(user);

        trade.setUser(user);
        trade.setTradeDate(LocalDateTime.now());
        trade.setStatus("COMPLETED");

        return tradeRepo.save(trade);
    }

    // GET USER TRADES
    @GetMapping("/{userId}")
    public List<Trade> getTrades(@PathVariable Long userId) {

        return tradeRepo.findByUserId(userId);
    }

    // SUMMARY
    @GetMapping("/summary/{userId}")
    public Map<String, Object> getSummary(@PathVariable Long userId) {

        List<Trade> trades = tradeRepo.findByUserId(userId);

        double totalAmount = trades.stream()
                .mapToDouble(Trade::getAmount)
                .sum();

        double totalConverted = trades.stream()
                .mapToDouble(Trade::getConvertedAmount)
                .sum();

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, Object> map = new HashMap<>();

        map.put("totalTrades", trades.size());
        map.put("totalAmount", totalAmount);
        map.put("totalConverted", totalConverted);
        map.put("wallet", user.getWallet());

        return map;
    }

    // GET WALLET
    @GetMapping("/wallet/{userId}")
    public Double getWallet(@PathVariable Long userId) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return user.getWallet();
    }
}