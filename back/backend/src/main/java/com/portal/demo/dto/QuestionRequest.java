package com.portal.demo.dto;

import lombok.*;

@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionRequest {
    private Long quizId;
    private String content;
    private String image;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String answer;
}
