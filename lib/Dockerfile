FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/CyberWarriorsX/CERI-YASIYA /root/CyberWarriorsX
WORKDIR /root/CyberWarriorsX
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
