package fivefind.fivefind.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@Table(name = "user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member implements UserDetails{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int seq;

    @Column(length = 30, nullable = false)
    private String email;

    @Column(length = 300, nullable = false)
    private String pwd;

    @Column(length = 30, nullable = false)
    private String info;

    @Column(length = 10, nullable = false)
    private String name;

    @Column(length = 15, nullable = false)
    private String phone;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> role = new ArrayList<>();


    //    @JoinColumn(name = "salt")
    @OneToOne(cascade = CascadeType.ALL)
    private Salt salt;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date signTime;

    @Column(length = 200, nullable = true)
    private String token;


    //restart
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.role.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() { return null; }
    @Override
    public String getUsername() { return email; }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() { return true; }
}
