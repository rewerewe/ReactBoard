package com.example.demo.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.board.data.BoardDto;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PATCH, RequestMethod.DELETE}) // 전체허용으로 테스트 처리. 127.0.0.1:3000 으로 특정할 경우 403 에러 발생
@RestController
public class BoardController {
  
  @Autowired
  private BoardService service;
  
  @GetMapping("/list")
  public List<BoardDto> selectBoard() {
    return service.selectBoard();
  }

  @PostMapping("/detail/{id}")
  public BoardDto detailBoard(@PathVariable int id) {
    return service.detailBoard(id);
  }

  @PostMapping("/insert")
  public int insertBoard(@RequestBody BoardDto board) {
    return service.insertBoard(board);
  }

  @PatchMapping("/update/{id}")
  public int updateBoard(@PathVariable int id, @RequestBody BoardDto board) {
    return service.updateBoard(id, board);
  }

  @DeleteMapping ("/delete/{id}")
  public int deleteBoard(@PathVariable int id) {
    return service.deleteBoard(id);
  }

}