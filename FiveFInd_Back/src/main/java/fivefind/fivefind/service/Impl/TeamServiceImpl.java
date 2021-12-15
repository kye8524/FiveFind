package fivefind.fivefind.service.Impl;

import fivefind.fivefind.entity.Team;
import fivefind.fivefind.repository.TeamRepository;
import fivefind.fivefind.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Override
    public void registTeam(Team team){
        teamRepository.save(team);
    }
}
