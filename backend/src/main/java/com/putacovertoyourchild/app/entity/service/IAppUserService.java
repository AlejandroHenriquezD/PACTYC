package com.putacovertoyourchild.app.entity.service;

import java.util.List;

import com.putacovertoyourchild.app.entity.model.AppUser;

public interface IAppUserService {
	public List<AppUser> getAll();
	public AppUser getOne(long id);
	public void post(AppUser appUser);
	public void put(AppUser appUser, long id);
	public void delete(long id);
}
