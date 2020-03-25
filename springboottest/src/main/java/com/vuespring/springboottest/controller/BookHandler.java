package com.vuespring.springboottest.controller;

import com.vuespring.springboottest.entity.Book;
import com.vuespring.springboottest.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookHandler {
    @Autowired
    private BookRepository bookRepository;
    @GetMapping("/findall")
    public List<Book> findAll(){
        return bookRepository.findAll();
    }
}
