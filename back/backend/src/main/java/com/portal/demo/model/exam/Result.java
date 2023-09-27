package com.portal.demo.model.exam;

import com.portal.demo.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "result")
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long resId;
    private Integer points;
    private String quizTitle;
    private Integer attempted;
    private Integer correctAnswers;
    private Integer incorrectAnswers;
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
}
