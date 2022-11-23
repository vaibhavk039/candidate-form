package com.vaibhav.candidateform.service;

import com.vaibhav.candidateform.model.Candidate;

import java.util.List;

public interface CandidateService {

   public Candidate saveCandidate(Candidate candidate);
   public List<Candidate> getAllCandidates();
}
