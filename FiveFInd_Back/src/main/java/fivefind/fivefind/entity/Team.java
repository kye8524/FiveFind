package fivefind.fivefind.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Team {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int seq;

    @Column(length = 10, nullable = false)
    private String name;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 10, nullable = false)
    private String category;

    @Column(length = 300, nullable = false)
    private String content;


}
