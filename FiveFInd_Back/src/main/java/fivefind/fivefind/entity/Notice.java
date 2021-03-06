package fivefind.fivefind.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notice {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int seq;

    @Column(length = 300, nullable = false)
    private String title;

    @Column(length = 300, nullable = false)
    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date reg_time;

}
