package com.leilao.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class index {

    @GetMapping
    public String index() {
        return "Ola";
    }

    @GetMapping("/new")
    public String index2() {
        return "Ola 2";
    }

    @PostMapping
    public String save(){
        return "Success";
    }
}
