--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Debian 12.6-1.pgdg100+1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: dates; Type: TABLE DATA; Schema: public; Owner: directus
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.dates DISABLE TRIGGER ALL;

COPY public.dates (id, start_date, end_date, start_time, end_time, repetition_unit, repetition_interval, event) FROM stdin;
92f9e081-52df-4e76-bb38-e81e52a033ca	2021-05-05	\N	\N	\N	\N	\N	9e69904a-e648-43ee-beb5-d6b062e2b645
\.


ALTER TABLE public.dates ENABLE TRIGGER ALL;

--
-- Data for Name: directus_activity; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_activity DISABLE TRIGGER ALL;

COPY public.directus_activity (id, action, "user", "timestamp", ip, user_agent, collection, item, comment) FROM stdin;
1	authenticate	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 18:47:36.610295+00	::ffff:172.30.0.5	axios/0.21.1	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	\N
2	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 18:47:36.669599+00	172.30.0.5	axios/0.21.1	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	\N
3	authenticate	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 18:48:05.560137+00	::ffff:172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	\N
4	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:30.273054+00	172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_files	d1867eb3-5d80-45b5-a118-bd75fde660ba	\N
5	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:43.145759+00	172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	events_directus_files_2	1	\N
6	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:43.145759+00	172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	dates	92f9e081-52df-4e76-bb38-e81e52a033ca	\N
7	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:43.145759+00	172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	events	9e69904a-e648-43ee-beb5-d6b062e2b645	\N
8	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:55.988988+00	172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_presets	2	\N
9	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:32:30.186577+00	172.31.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_files	d1867eb3-5d80-45b5-a118-bd75fde660ba	\N
10	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:33:04.483958+00	172.31.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	events	9e69904a-e648-43ee-beb5-d6b062e2b645	\N
11	authenticate	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:36:52.956405+00	::ffff:192.168.0.5	axios/0.21.1	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	\N
12	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:36:53.026737+00	192.168.0.5	axios/0.21.1	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	\N
13	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:50:07.173415+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_presets	3	\N
14	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:50:08.123838+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_presets	3	\N
15	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:51:42.613723+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	events	9e69904a-e648-43ee-beb5-d6b062e2b645	\N
16	create	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:51:50.51334+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_presets	4	\N
17	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:53:25.632386+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_collections	events	\N
18	update	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:53:36.45654+00	192.168.16.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0	directus_collections	dates	\N
\.


ALTER TABLE public.directus_activity ENABLE TRIGGER ALL;

--
-- Data for Name: directus_folders; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_folders DISABLE TRIGGER ALL;

COPY public.directus_folders (id, name, parent) FROM stdin;
\.


ALTER TABLE public.directus_folders ENABLE TRIGGER ALL;

--
-- Data for Name: directus_users; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_users DISABLE TRIGGER ALL;

COPY public.directus_users (id, first_name, last_name, email, password, location, title, description, tags, avatar, language, theme, tfa_secret, status, role, token, last_access, last_page) FROM stdin;
2a326131-1ed4-41f6-8c71-52573dd8127a	\N	\N	l.wormer@pm.me	$argon2i$v=19$m=4096,t=3,p=1$x7k6yMXiO6U03hslmaPbvQ$WkDfwsewkRHRk68TB/wlk/dlipuIjp7CL/zwJQ1XMdY	\N	\N	\N	\N	\N	en-US	auto	\N	active	33290ee0-c865-4a80-82a2-91ed4492d521	eit5OiJeiceeYiek8choo6sheipaefa7	2021-05-05 20:54:47.163+00	/collections/
\.


ALTER TABLE public.directus_users ENABLE TRIGGER ALL;

--
-- Data for Name: directus_files; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_files DISABLE TRIGGER ALL;

COPY public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata) FROM stdin;
d1867eb3-5d80-45b5-a118-bd75fde660ba	local	d1867eb3-5d80-45b5-a118-bd75fde660ba.png	qb_text.png	Qb Text	image/png	\N	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:30.273054+00	\N	2021-05-05 20:32:30.35+00	\N	71387	1500	401	\N	\N	\N	\N	\N	{"icc":{"version":"4.3","intent":"Perceptual","cmm":"lcms","deviceClass":"Monitor","colorSpace":"RGB","connectionSpace":"XYZ","platform":"Microsoft","creator":"lcms","description":"GIMP built-in sRGB","copyright":"Public Domain","deviceModelDescription":"sRGB"}}
\.


ALTER TABLE public.directus_files ENABLE TRIGGER ALL;

--
-- Data for Name: directus_revisions; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_revisions DISABLE TRIGGER ALL;

COPY public.directus_revisions (id, activity, collection, item, data, delta, parent) FROM stdin;
1	2	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	{"id":"2a326131-1ed4-41f6-8c71-52573dd8127a","first_name":null,"last_name":null,"email":"l.wormer@pm.me","password":"**********","location":null,"title":null,"description":null,"tags":null,"avatar":null,"language":"en-US","theme":"auto","tfa_secret":null,"status":"active","role":"33290ee0-c865-4a80-82a2-91ed4492d521","token":"eit5OiJeiceeYiek8choo6sheipaefa7","last_access":"2021-05-05T18:47:36Z","last_page":null}	{"token":"eit5OiJeiceeYiek8choo6sheipaefa7"}	\N
2	4	directus_files	d1867eb3-5d80-45b5-a118-bd75fde660ba	{"title":"Qb Text","uploaded_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","filename_download":"qb_text.png","type":"image/png","storage":"local","id":"d1867eb3-5d80-45b5-a118-bd75fde660ba"}	{"title":"Qb Text","uploaded_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","filename_download":"qb_text.png","type":"image/png","storage":"local","id":"d1867eb3-5d80-45b5-a118-bd75fde660ba"}	\N
3	5	events_directus_files_2	1	{"directus_files_id":"d1867eb3-5d80-45b5-a118-bd75fde660ba","events_id":"9e69904a-e648-43ee-beb5-d6b062e2b645","id":1}	{"directus_files_id":"d1867eb3-5d80-45b5-a118-bd75fde660ba","events_id":"9e69904a-e648-43ee-beb5-d6b062e2b645","id":1}	\N
4	6	dates	92f9e081-52df-4e76-bb38-e81e52a033ca	{"start_date":"2021-05-05","event":"9e69904a-e648-43ee-beb5-d6b062e2b645","id":"92f9e081-52df-4e76-bb38-e81e52a033ca"}	{"start_date":"2021-05-05","event":"9e69904a-e648-43ee-beb5-d6b062e2b645","id":"92f9e081-52df-4e76-bb38-e81e52a033ca"}	\N
5	7	events	9e69904a-e648-43ee-beb5-d6b062e2b645	{"title":"Kaffeeklatsch","description":"*love it*","additional_images":[{"directus_files_id":"d1867eb3-5d80-45b5-a118-bd75fde660ba"}],"dates":[{"start_date":"2021-05-05"}],"id":"9e69904a-e648-43ee-beb5-d6b062e2b645"}	{"title":"Kaffeeklatsch","description":"*love it*","additional_images":[{"directus_files_id":"d1867eb3-5d80-45b5-a118-bd75fde660ba"}],"dates":[{"start_date":"2021-05-05"}],"id":"9e69904a-e648-43ee-beb5-d6b062e2b645"}	\N
6	8	directus_presets	2	{"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"events","search":null,"filters":[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}],"layout":"tabular","layout_query":{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}},"layout_options":{"tabular":{"widths":{"user_created":227}}},"id":2}	{"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"events","search":null,"filters":[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}],"layout":"tabular","layout_query":{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}},"layout_options":{"tabular":{"widths":{"user_created":227}}},"id":2}	\N
7	9	directus_files	d1867eb3-5d80-45b5-a118-bd75fde660ba	{"id":"d1867eb3-5d80-45b5-a118-bd75fde660ba","storage":"local","filename_disk":"d1867eb3-5d80-45b5-a118-bd75fde660ba.png","filename_download":"qb_text.png","title":"Qb Text","type":"image/png","folder":null,"uploaded_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","uploaded_on":"2021-05-05T20:29:30Z","modified_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","modified_on":"2021-05-05T20:32:30Z","charset":null,"filesize":71387,"width":1500,"height":401,"duration":null,"embed":null,"description":null,"location":null,"tags":null,"metadata":{"icc":{"version":"4.3","intent":"Perceptual","cmm":"lcms","deviceClass":"Monitor","colorSpace":"RGB","connectionSpace":"XYZ","platform":"Microsoft","creator":"lcms","description":"GIMP built-in sRGB","copyright":"Public Domain","deviceModelDescription":"sRGB"}}}	{"storage":"local","filename_download":"qb_text.png","title":"Qb Text","type":"image/png","uploaded_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","modified_by":"2a326131-1ed4-41f6-8c71-52573dd8127a","modified_on":"2021-05-05T20:32:30.189Z"}	\N
8	10	events	9e69904a-e648-43ee-beb5-d6b062e2b645	{"id":"9e69904a-e648-43ee-beb5-d6b062e2b645","status":"draft","user_created":"2a326131-1ed4-41f6-8c71-52573dd8127a","date_created":"2021-05-05T20:29:43Z","title":"Kaffeeklatsch","description":"*love it*","title_image":"d1867eb3-5d80-45b5-a118-bd75fde660ba","additional_images":[1],"dates":["92f9e081-52df-4e76-bb38-e81e52a033ca"]}	{"title_image":"d1867eb3-5d80-45b5-a118-bd75fde660ba"}	\N
9	12	directus_users	2a326131-1ed4-41f6-8c71-52573dd8127a	{"id":"2a326131-1ed4-41f6-8c71-52573dd8127a","first_name":null,"last_name":null,"email":"l.wormer@pm.me","password":"**********","location":null,"title":null,"description":null,"tags":null,"avatar":null,"language":"en-US","theme":"auto","tfa_secret":null,"status":"active","role":"33290ee0-c865-4a80-82a2-91ed4492d521","token":"eit5OiJeiceeYiek8choo6sheipaefa7","last_access":"2021-05-05T20:36:52Z","last_page":"/collections/events"}	{"token":"eit5OiJeiceeYiek8choo6sheipaefa7"}	\N
10	13	directus_presets	3	{"bookmark":null,"role":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","search":null,"filters":null,"layout":"tabular","layout_query":null,"layout_options":{"tabular":{"widths":{"id":307}}},"collection":"dates","id":3}	{"bookmark":null,"role":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","search":null,"filters":null,"layout":"tabular","layout_query":null,"layout_options":{"tabular":{"widths":{"id":307}}},"collection":"dates","id":3}	\N
11	14	directus_presets	3	{"id":3,"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"dates","search":null,"filters":null,"layout":"tabular","layout_query":null,"layout_options":{"tabular":{"widths":{"id":336}}}}	{"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"dates","search":null,"filters":null,"layout":"tabular","layout_query":null,"layout_options":"{\\"tabular\\":{\\"widths\\":{\\"id\\":336}}}"}	\N
12	15	events	9e69904a-e648-43ee-beb5-d6b062e2b645	{"id":"9e69904a-e648-43ee-beb5-d6b062e2b645","status":"published","user_created":"2a326131-1ed4-41f6-8c71-52573dd8127a","date_created":"2021-05-05T20:29:43Z","title":"Kaffeeklatsch","description":"*love it*","title_image":"d1867eb3-5d80-45b5-a118-bd75fde660ba","additional_images":[1],"dates":["92f9e081-52df-4e76-bb38-e81e52a033ca"]}	{"status":"published"}	\N
13	16	directus_presets	4	{"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"events","search":null,"filters":[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}],"layout":"tabular","layout_query":{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}},"layout_options":{"tabular":{"widths":{"user_created":235}}},"id":4}	{"bookmark":null,"user":"2a326131-1ed4-41f6-8c71-52573dd8127a","role":null,"collection":"events","search":null,"filters":[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}],"layout":"tabular","layout_query":{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}},"layout_options":{"tabular":{"widths":{"user_created":235}}},"id":4}	\N
14	17	directus_collections	events	{"collection":"events","icon":"people_alt","note":"","display_template":"{{title}}","hidden":false,"singleton":false,"translations":[{"language":"en-US","translation":"Events"},{"language":"de-DE","translation":"Veranstaltungen"}],"archive_field":"status","archive_app_filter":true,"archive_value":"archived","unarchive_value":"draft","sort_field":null}	{"icon":"people_alt"}	\N
15	18	directus_collections	dates	{"collection":"dates","icon":"calendar_today","note":null,"display_template":null,"hidden":false,"singleton":false,"translations":[{"language":"en-US","translation":"Dates"},{"language":"de-DE","translation":"Termine"}],"archive_field":null,"archive_app_filter":true,"archive_value":null,"unarchive_value":null,"sort_field":null}	{"icon":"calendar_today"}	\N
\.


ALTER TABLE public.directus_revisions ENABLE TRIGGER ALL;

--
-- Data for Name: directus_sessions; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_sessions DISABLE TRIGGER ALL;

COPY public.directus_sessions (token, "user", expires, ip, user_agent) FROM stdin;
A0F8gryukY8iIUdKMmrQorQkxMRANTpOgWd3Sgt30NHf2AQMhC7tTvVBIrnWkH-h	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-12 18:47:36.603+00	::ffff:172.30.0.5	axios/0.21.1
IkDKdH015WJP7Cd6bLjJJG3Neeo0mVSL8n8nvb1wv7dy9ttXmk-ST0UgLJ_xSrBQ	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-12 20:36:52.947+00	::ffff:192.168.0.5	axios/0.21.1
RK5IwqfzZz2cfzbB0KnMPNjJANQvGOIhPdJz9oiUgytXY8iTuNYGg-fcgTUc357l	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-12 20:46:49.802+00	::ffff:172.30.0.5	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
\.


ALTER TABLE public.directus_sessions ENABLE TRIGGER ALL;

--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.events DISABLE TRIGGER ALL;

COPY public.events (id, status, user_created, date_created, title, description, title_image) FROM stdin;
9e69904a-e648-43ee-beb5-d6b062e2b645	published	2a326131-1ed4-41f6-8c71-52573dd8127a	2021-05-05 20:29:43.156+00	Kaffeeklatsch	*love it*	d1867eb3-5d80-45b5-a118-bd75fde660ba
\.


ALTER TABLE public.events ENABLE TRIGGER ALL;

--
-- Data for Name: events_directus_files_2; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.events_directus_files_2 DISABLE TRIGGER ALL;

COPY public.events_directus_files_2 (id, events_id, directus_files_id) FROM stdin;
1	9e69904a-e648-43ee-beb5-d6b062e2b645	d1867eb3-5d80-45b5-a118-bd75fde660ba
\.


ALTER TABLE public.events_directus_files_2 ENABLE TRIGGER ALL;

--
-- Name: directus_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_activity_id_seq', 18, true);


--
-- Name: directus_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_fields_id_seq', 30, true);


--
-- Name: directus_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_permissions_id_seq', 24, true);


--
-- Name: directus_presets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_presets_id_seq', 4, true);


--
-- Name: directus_relations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_relations_id_seq', 10, true);


--
-- Name: directus_revisions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_revisions_id_seq', 15, true);


--
-- Name: directus_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_settings_id_seq', 1, false);


--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_webhooks_id_seq', 1, false);


--
-- Name: events_directus_files_2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.events_directus_files_2_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

