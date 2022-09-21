package com.putacovertoyourchild.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.putacovertoyourchild.app.entity.dao.IAppUserDao;
import com.putacovertoyourchild.app.entity.model.AppUser;

@Service
public class AppUserService implements IAppUserService {

	@Autowired
	IAppUserDao appUserDao;
	
	@Override
	public List<AppUser> getAll() {
		// TODO Auto-generated method stub
		return (List<AppUser>) appUserDao.findAll();
		
	}

	@Override
	public AppUser getOne(long id) {
		// TODO Auto-generated method stub
		return appUserDao.findById(id).get();
	}

	@Override
	public void post(AppUser appUser) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void put(AppUser appUser, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		
	}

}
