package com.vaibhav.candidateform.service;

import com.vaibhav.candidateform.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.vaibhav.candidateform.model.Candidate;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CandidateServiceImpl implements CandidateService{
    @Autowired

    private CandidateRepository candidateRepository;

    @Override
    public Candidate saveCandidate(Candidate candidate) {
        return candidateRepository.save(candidate) ;
    }

    @Override
    public List<Candidate> getAllCandidates() {

        return candidateRepository.findAll();
    }
}
