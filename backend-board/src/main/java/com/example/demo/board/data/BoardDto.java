package com.example.demo.board.data;

import lombok.Data;

@Data
public class BoardDto {
  private int id;
  private String title;
  private String username;
  private String content;
  private int hit;
  private String insdt;
  private String upddt;
}
