terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}


resource "docker_image" "node_app" {
  name = "node:18"
}

resource "docker_container" "web_app" {
  name  = "my_node_app"
  image = docker_image.node_app.name

  ports {
    internal = 3000
    external = 3000
  }

  volumes {
    host_path      = abspath("${path.module}/app")  # Mount ไฟล์โค้ด
    container_path = "/usr/src/app"
  }

  working_dir = "/usr/src/app"
  command     = ["sh", "-c", "npm install && node app.js"]
}

