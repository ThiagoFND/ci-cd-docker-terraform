resource "aws_instance" "app" {
  ami           = "ami-08c40ec9ead489470" # Ubuntu Server 22.04 (exemplo)
  instance_type = "t2.micro"

  tags = {
    Name = "ci-cd-docker-app"
  }
}
