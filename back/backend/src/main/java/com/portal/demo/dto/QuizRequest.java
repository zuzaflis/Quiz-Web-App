package com.portal.demo.dto;

import lombok.*;

@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class QuizRequest {
    private Long categoryId;
    private String title;
    private String description;
    private String maxMarks;
    private String numberOfQuestions;
}
