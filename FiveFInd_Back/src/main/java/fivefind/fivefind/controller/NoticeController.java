package fivefind.fivefind.controller;

import fivefind.fivefind.entity.Notice;
import fivefind.fivefind.entity.Response;
import fivefind.fivefind.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/notice")
public class NoticeController {

    private final NoticeRepository noticeRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/{seq}")
    public Response getNoticeDetail(@PathVariable int seq){
        Optional<Notice> detail = noticeRepository.findBySeq(seq);
        if(detail.isPresent()){
            Notice notice = detail.get();
            return new Response("success", "notice 정보 보기", detail);
        }
        return new Response("error", "notice 가 없음", null);
    }

    @RequestMapping(method = RequestMethod.GET, path = "")
    public Response getNotice(){
        Iterable<Notice> notices = noticeRepository.findAll();
            return new Response("success", "notice 정보 보기", notices);
    }
}
