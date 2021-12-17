package fivefind.fivefind.controller;

import fivefind.fivefind.entity.Member;
import fivefind.fivefind.entity.Notice;
import fivefind.fivefind.entity.Response;
import fivefind.fivefind.entity.Team;
import fivefind.fivefind.repository.TeamRepository;
import fivefind.fivefind.service.TeamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamController {

    private final TeamRepository teamRepository;

    @Autowired
    private TeamService teamService;

    @RequestMapping(method = RequestMethod.GET, path = "/{seq}")
    public Response getTeamDetail(@PathVariable int seq){
        Optional<Team>detail = teamRepository.findBySeq(seq);
        if(detail.isPresent()){
            Team team = detail.get();
            return new Response("success", "team 상세정보 보기", detail);
        }
        return new Response("error", "team 가 없음", null);
    }

    @RequestMapping(method = RequestMethod.GET, path = "")
    public Response getTeam(){
        Iterable<Team> teams = teamRepository.findAll();
        return new Response("success", "team 목록 보기", teams);
    }

    @PostMapping("/regist")
    public Response registTeam(@RequestBody Team team) {
        try {
            teamService.registTeam(team);
            return new Response("success", "팀등록을 성공적으로 완료했습니다.", team);
        } catch (Exception e) {
            return new Response("error", "팀등록을 하는 도중 오류가 발생했습니다.", null);
        }
    }


}
