require 'net/smtp'

#Google Email.
def EnviarEmail
	mensagem = "Hello, World!"
	Net::SMTP.start('smtp.gmail.com', 587, 'gmail.com', '', '', :plain) do |smtp|
		smtp.enable_starttls
		smtp.send_message mensagem, '', ''
		smtp.finish
	end
end

# - Estudar o ActionMailer
# - smtp-tls

EnviarEmail()