package com.putacovertoyourchild.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.putacovertoyourchild.app.entity.model.AppUser;
import com.putacovertoyourchild.app.entity.service.IAppUserService;

@RestController
public class AppUserController {

	@Autowired
	IAppUserService appUserService;
	
	@GetMapping("/appuser")
	public List<AppUser> getAll(){
		return appUserService.getAll();	
	}
	@GetMapping("/appuser/{id}")
	public AppUser getOne(@PathVariable(value="id") long id) {
		return appUserService.getOne(id);
	}
	@PostMapping("/appuser")
	public void post(AppUser appUser) {
		appUserService.post(appUser);
	}
	@PutMapping("/appuser/{id}")
	public void put(AppUser appUser, @PathVariable(value="id") long id) {
		appUserService.put(appUser, id);
	}
	@DeleteMapping("/appuser/{id}")
	public void delete( @PathVariable(value="id") long id) {
		appUserService.delete(id);
	}
	
}
