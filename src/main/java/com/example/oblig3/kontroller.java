package com.example.oblig3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kontroller {
    private final List<Billett> alleBilletter = new ArrayList<>();
    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlleBilletter() {
        return alleBilletter;
    }

    @GetMapping("/slett")
    public List<Billett> slettInnhold() {
        alleBilletter.clear();
        return alleBilletter;
    }
}
