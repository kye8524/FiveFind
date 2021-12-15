package fivefind.fivefind.repository;

import fivefind.fivefind.entity.Notice;
import fivefind.fivefind.entity.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TeamRepository extends CrudRepository<Team, Integer> {

    Iterable<Team> findAll();

    Optional<Team> findBySeq(int seq);

}
