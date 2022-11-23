package com.vaibhav.candidateform.controller;

import com.vaibhav.candidateform.model.Candidate;
import com.vaibhav.candidateform.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/candidate")
@CrossOrigin
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @PostMapping("/add")
    public String add(@RequestBody Candidate candidate){
        candidateService.saveCandidate(candidate);
        return "New candidate created";
    }
    @GetMapping("/getAll")

    public List<Candidate> getAllCandidates(){
        return candidateService.getAllCandidates();
    }
}
