package fivefind.fivefind.service.Impl;

import fivefind.fivefind.entity.Member;
import fivefind.fivefind.entity.Salt;
import fivefind.fivefind.repository.MemberRepository;
import fivefind.fivefind.service.AuthService;
import fivefind.fivefind.service.SaltUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AuthServiceImpl implements UserDetailsService, AuthService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private SaltUtil saltUtil;

    @Override
    public void signUpUser(Member member) {
        String pwd = member.getPwd();
        String salt = saltUtil.genSalt();
        member.setSalt(new Salt(salt));
        member.setPwd(saltUtil.encodePassword(salt, pwd));
        memberRepository.save(member);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }

}
