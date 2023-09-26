package com.portal.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

