package fivefind.fivefind.repository;

import fivefind.fivefind.entity.Notice;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface NoticeRepository extends CrudRepository<Notice, Integer> {

    Iterable<Notice> findAll();

    Optional<Notice> findBySeq(int seq);
}

