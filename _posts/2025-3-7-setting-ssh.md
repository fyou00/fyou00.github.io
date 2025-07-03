---
layout: post
title: "Setup SSH Key GitHub"
author: "Muhammad Fathurrahman"
---

🔐 Cara Setting SSH GitHub

Panduan ini menjelaskan cara mengatur autentikasi SSH ke GitHub agar kamu tidak perlu mengetik username dan password setiap kali push/pull.

---

## 1. Generate SSH Key Baru
```sh
ssh-keygen -t ed25519 -C "youremail@example.com"
```
Kemudian tekan enter untuk semua prompt.

## 2. Salin Public Key
```sh
cat ~/.ssh/id_ed25519.pub
```

## 3. Tambahkan SSH Key ke GitHub
1. Buka GitHub SSH Settings
2. Klik New SSH Key
3. Tempelkan hasil dari langkah 4
4. Klik Add SSH Key