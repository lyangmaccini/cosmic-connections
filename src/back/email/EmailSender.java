package src.back.email;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EmailSender {

  // Set your Gmail username and password
  private static final String USERNAME = "urstarcrossedlover@gmail.com";
  private static final String PASSWORD = "blxu mapw abvs wwem";

  public static void sendEmail(String to, String body) {

    // Create properties to set various mail properties
    Properties prop = new Properties();
    prop.put("mail.smtp.auth", true);
    prop.put("mail.smtp.starttls.enable", "true");
    prop.put("mail.smtp.host", "smtp.gmail.com");
    prop.put("mail.smtp.port", "587");
    prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");

    // Create a Session object
    Session session = Session.getInstance(prop, new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(USERNAME,PASSWORD);
      }
    });

    try {
      // Create a MimeMessage object
      Message message = new MimeMessage(session);
      message.setFrom(new InternetAddress(USERNAME));
      message.setRecipients(
          Message.RecipientType.TO, InternetAddress.parse(to));
      message.setSubject("A Message From Your Cosmic Connection!");

      MimeBodyPart mimeBodyPart = new MimeBodyPart();
      mimeBodyPart.setContent(body, "text/html; charset=utf-8");

      Multipart multipart = new MimeMultipart();
      multipart.addBodyPart(mimeBodyPart);

      message.setContent(multipart);

      Transport.send(message);

      System.out.println("Email sent successfully!");

    } catch (MessagingException e) {
      e.printStackTrace();
    }
  }
}