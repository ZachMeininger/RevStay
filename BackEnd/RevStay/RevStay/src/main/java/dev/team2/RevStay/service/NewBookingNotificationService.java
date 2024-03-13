package dev.team2.RevStay.service;

import dev.team2.RevStay.dto.NewBookingNotificationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NewBookingNotificationService {

    private final String NOTIFICATION_ENDPOINT = "http://localhost:8080/notifyBooking";

    private final RestTemplate restTemplate;

    @Autowired
    public NewBookingNotificationService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void notifyNewBooking(NewBookingNotificationDTO newBookingNotificationDTO) {
        ResponseEntity<Void> responseEntity = restTemplate.postForEntity(NOTIFICATION_ENDPOINT, newBookingNotificationDTO, Void.class);
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            System.out.println("Notification sent successfully");
        } else {
            System.err.println("Failed to send notification");
        }
    }
}
