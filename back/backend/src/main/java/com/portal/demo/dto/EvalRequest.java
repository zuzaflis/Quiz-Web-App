package com.portal.demo.dto;

import com.portal.demo.model.exam.Question;
import lombok.*;

import java.util.List;

@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EvalRequest {
    private Long userId;
     private List<Question> questions;
}
