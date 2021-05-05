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
-- Data for Name: directus_collections; Type: TABLE DATA; Schema: public; Owner: directus
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.directus_collections DISABLE TRIGGER ALL;

COPY public.directus_collections (collection, icon, note, display_template, hidden, singleton, translations, archive_field, archive_app_filter, archive_value, unarchive_value, sort_field) FROM stdin;
events_directus_files_2	import_export	\N	\N	t	f	\N	\N	t	\N	\N	\N
events	people_alt		{{title}}	f	f	[{"language":"en-US","translation":"Events"},{"language":"de-DE","translation":"Veranstaltungen"}]	status	t	archived	draft	\N
dates	calendar_today	\N	\N	f	f	[{"language":"en-US","translation":"Dates"},{"language":"de-DE","translation":"Termine"}]	\N	t	\N	\N	\N
\.


ALTER TABLE public.directus_collections ENABLE TRIGGER ALL;

--
-- Data for Name: directus_fields; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_fields DISABLE TRIGGER ALL;

COPY public.directus_fields (id, collection, field, special, interface, options, display, display_options, locked, readonly, hidden, sort, width, "group", translations, note) FROM stdin;
8	events	id	uuid	text-input	\N	\N	\N	f	t	t	\N	full	\N	\N	\N
21	dates	end_date	\N	datetime	\N	datetime	{"format":"short"}	f	f	f	5	half	\N	[{"language":"en-US","translation":"Ends on"},{"language":"de-DE","translation":"Endet am"}]	\N
23	dates	end_time	\N	datetime	\N	datetime	{"format":"short"}	f	f	f	6	half	\N	[{"language":"en-US","translation":"Ends at"},{"language":"de-DE","translation":"Endet um"}]	\N
27	dates	repetition_unit	\N	dropdown	{"choices":[{"text":"Days","value":"days"},{"text":"Weeks","value":"weeks"},{"text":"Months (by calendar)","value":"months"}],"icon":"repeat"}	labels	{"defaultBackground":"#ECEFF1"}	f	f	f	7	full	\N	[{"language":"en-US","translation":"Repetition"},{"language":"de-DE","translation":"Wiederholung"}]	\N
28	dates	repetition_interval	\N	numeric	{"min":0}	raw	\N	f	f	f	8	full	\N	[{"language":"en-US","translation":"Repetition interval"},{"language":"de-DE","translation":"Wiederholungsintervall"}]	\N
16	events_directus_files_2	id	\N	\N	\N	\N	\N	f	f	t	\N	full	\N	\N	\N
17	events_directus_files_2	events_id	\N	\N	\N	\N	\N	f	f	t	\N	full	\N	\N	\N
18	events_directus_files_2	directus_files_id	\N	\N	\N	\N	\N	f	f	t	\N	full	\N	\N	\N
15	events	additional_images	files	files	\N	related-values	{"template":"{{directus_files_id.filename_download}}"}	f	f	f	\N	half	\N	[{"language":"en-US","translation":"Additional images"},{"language":"de-DE","translation":"Weitere Bilder"}]	
9	events	status	\N	dropdown	{"choices":[{"text":"Published","value":"published"},{"text":"Draft","value":"draft"},{"text":"Archived","value":"archived"}],"icon":"spellcheck"}	labels	{"showAsDot":true,"choices":[{"background":"#2F80ED","value":"published"},{"background":"#ECEFF1","value":"draft"},{"background":"#F2994A","value":"archived"}],"defaultBackground":"#ECEFF1"}	f	f	f	\N	full	\N	[{"language":"en-US","translation":"Status"},{"language":"de-DE","translation":"Status"}]	\N
10	events	user_created	user-created	user	{"display":"both"}	user	\N	f	t	t	\N	half	\N	[{"language":"en-US","translation":"Created by"},{"language":"de-DE","translation":"Erstellt von"}]	\N
11	events	date_created	date-created	datetime	\N	datetime	{"relative":true}	f	t	t	\N	half	\N	[{"language":"en-US","translation":"Created on"},{"language":"de-DE","translation":"Erstellt am"}]	\N
12	events	title	\N	text-input	{"iconLeft":"title"}	raw	\N	f	f	f	\N	full	\N	[{"language":"de-DE","translation":"Titel"},{"language":"en-US","translation":"Title"}]	\N
14	events	title_image	\N	image	\N	image	\N	f	f	f	\N	half	\N	[{"language":"en-US","translation":"Title image"},{"language":"de-DE","translation":"Titelbild"}]	\N
13	events	description	\N	markdown	\N	formatted-value	\N	f	f	f	\N	full	\N	[{"language":"de-DE","translation":"Beschreibung"},{"language":"en-US","translation":"Description"}]	\N
29	dates	event	\N	many-to-one	{"template":"{{title}}"}	related-values	{"template":"{{title}}"}	f	f	f	2	full	\N	\N	\N
30	events	dates	o2m	one-to-many	{"fields":["start_date","start_time","end_date","end_time","repetition_unit","repetition_interval"]}	related-values	{"template":"{{start_date}}"}	f	f	f	\N	full	\N	[{"language":"en-US","translation":"Dates"},{"language":"de-DE","translation":"Termine"}]	\N
19	dates	id	uuid	text-input	\N	\N	\N	f	t	t	1	full	\N	\N	\N
20	dates	start_date	\N	datetime	\N	datetime	{"format":"short"}	f	f	f	3	half	\N	[{"language":"en-US","translation":"Starts on"},{"language":"de-DE","translation":"Startet am"}]	\N
22	dates	start_time	\N	datetime	\N	datetime	{"format":"short"}	f	f	f	4	half	\N	[{"language":"en-US","translation":"Starts at"},{"language":"de-DE","translation":"Startet um"}]	\N
\.


ALTER TABLE public.directus_fields ENABLE TRIGGER ALL;

--
-- Data for Name: directus_migrations; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_migrations DISABLE TRIGGER ALL;

COPY public.directus_migrations (version, name, "timestamp") FROM stdin;
20201028A	Remove Collection Foreign Keys	2021-05-05 16:30:14.148571+00
20201029A	Remove System Relations	2021-05-05 16:30:14.156226+00
20201029B	Remove System Collections	2021-05-05 16:30:14.162455+00
20201029C	Remove System Fields	2021-05-05 16:30:14.175721+00
20201105A	Add Cascade System Relations	2021-05-05 16:30:14.304413+00
20201105B	Change Webhook URL Type	2021-05-05 16:30:14.320788+00
\.


ALTER TABLE public.directus_migrations ENABLE TRIGGER ALL;

--
-- Data for Name: directus_roles; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_roles DISABLE TRIGGER ALL;

COPY public.directus_roles (id, name, icon, description, ip_access, enforce_tfa, module_list, collection_list, admin_access, app_access) FROM stdin;
33290ee0-c865-4a80-82a2-91ed4492d521	Admin	supervised_user_circle	\N	\N	f	\N	\N	t	t
cc7ba015-2a81-4f77-b3b0-e725299ea3e6	normal	supervised_user_circle	\N	\N	f	\N	\N	f	t
\.


ALTER TABLE public.directus_roles ENABLE TRIGGER ALL;

--
-- Data for Name: directus_permissions; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_permissions DISABLE TRIGGER ALL;

COPY public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields, "limit") FROM stdin;
1	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_activity	read	{}	\N	\N	*	\N
2	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_collections	read	{}	\N	\N	*	\N
3	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_fields	read	{}	\N	\N	*	\N
4	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_presets	create	{}	\N	\N	*	\N
5	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_presets	read	{}	\N	\N	*	\N
6	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_presets	update	{}	\N	\N	*	\N
7	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_presets	delete	{}	\N	\N	*	\N
8	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_relations	read	{}	\N	\N	*	\N
9	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_revisions	read	{}	\N	\N	*	\N
10	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_users	read	{}	\N	\N	*	\N
11	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_roles	read	{}	\N	\N	*	\N
12	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_settings	read	{}	\N	\N	*	\N
13	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_files	create	{}	\N	\N	*	\N
14	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_files	read	{}	\N	\N	*	\N
15	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_files	update	{}	\N	\N	*	\N
16	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_files	delete	{}	\N	\N	*	\N
17	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_folders	create	{}	\N	\N	*	\N
18	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_folders	read	{}	\N	\N	*	\N
19	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_folders	update	{}	\N	\N	*	\N
20	cc7ba015-2a81-4f77-b3b0-e725299ea3e6	directus_folders	delete	{}	\N	\N	*	\N
\.


ALTER TABLE public.directus_permissions ENABLE TRIGGER ALL;

--
-- Data for Name: directus_presets; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_presets DISABLE TRIGGER ALL;

COPY public.directus_presets (id, bookmark, "user", role, collection, search, filters, layout, layout_query, layout_options) FROM stdin;
1	\N	\N	\N	events	\N	\N	tabular	{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}}	\N
3	\N	2a326131-1ed4-41f6-8c71-52573dd8127a	\N	dates	\N	\N	tabular	\N	{"tabular":{"widths":{"id":336}}}
4	\N	2a326131-1ed4-41f6-8c71-52573dd8127a	\N	events	\N	[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}]	tabular	{"tabular":{"fields":["title","title_image","status","user_created","date_created"]}}	{"tabular":{"widths":{"user_created":235}}}
\.


ALTER TABLE public.directus_presets ENABLE TRIGGER ALL;

--
-- Data for Name: directus_relations; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_relations DISABLE TRIGGER ALL;

COPY public.directus_relations (id, many_collection, many_field, many_primary, one_collection, one_field, one_primary, one_collection_field, one_allowed_collections, junction_field) FROM stdin;
5	events_directus_files_2	events_id	id	events	additional_images	id	\N	\N	directus_files_id
6	events_directus_files_2	directus_files_id	id	directus_files	\N	id	\N	\N	events_id
3	events	user_created	id	directus_users	\N	id	\N	\N	\N
4	events	title_image	id	directus_files	\N	id	\N	\N	\N
9	dates	event	id	events	\N	id	\N	\N	\N
10	dates	event	id	events	dates	id	\N	\N	\N
\.


ALTER TABLE public.directus_relations ENABLE TRIGGER ALL;

--
-- Data for Name: directus_settings; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_settings DISABLE TRIGGER ALL;

COPY public.directus_settings (id, project_name, project_url, project_color, project_logo, public_foreground, public_background, public_note, auth_login_attempts, auth_password_policy, storage_asset_transform, storage_asset_presets, custom_css) FROM stdin;
\.


ALTER TABLE public.directus_settings ENABLE TRIGGER ALL;

--
-- Data for Name: directus_webhooks; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_webhooks DISABLE TRIGGER ALL;

COPY public.directus_webhooks (id, name, method, url, status, data, actions, collections) FROM stdin;
\.


ALTER TABLE public.directus_webhooks ENABLE TRIGGER ALL;

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
-- Name: directus_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_settings_id_seq', 1, false);


--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_webhooks_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

