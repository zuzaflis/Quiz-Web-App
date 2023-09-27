package com.portal.demo;

import com.portal.demo.auth.AuthenticationService;
import com.portal.demo.dto.RegisterRequest;
import com.portal.demo.model.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting");
	}
/*
	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service
	){
		return args -> {
			var admin = RegisterRequest.builder()
					.username("admin1")
					.firstName("admin")
					.lastName("admin")
					.email("admin@mail.com")
					.password("admin")
					.role(Role.ADMIN)
					.phone("13213")
					.build();
			System.out.println("Admin token: "+ service.register(admin).getToken());
		};
	}
*/

}

