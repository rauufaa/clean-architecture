--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Debian 11.5-3.pgdg90+1)
-- Dumped by pg_dump version 11.5 (Debian 11.5-3.pgdg90+1)

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

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: address; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.address (
    id integer NOT NULL,
    state character varying NOT NULL,
    city character varying NOT NULL,
    "streetName" character varying NOT NULL,
    "streetNumber" character varying NOT NULL,
    postcode character varying NOT NULL
);


ALTER TABLE public.address OWNER TO admin;

--
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_seq OWNER TO admin;

--
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- Name: price_list; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.price_list (
    id integer NOT NULL,
    "pricePerHour" integer NOT NULL
);


ALTER TABLE public.price_list OWNER TO admin;

--
-- Name: price_list_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.price_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.price_list_id_seq OWNER TO admin;

--
-- Name: price_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.price_list_id_seq OWNED BY public.price_list.id;


--
-- Name: reservation; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.reservation (
    id integer NOT NULL,
    "startDate" timestamp without time zone NOT NULL,
    "endDate" timestamp without time zone NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    state character varying NOT NULL,
    price integer NOT NULL,
    user_id integer,
    "sportsFieldId" integer
);


ALTER TABLE public.reservation OWNER TO admin;

--
-- Name: reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.reservation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservation_id_seq OWNER TO admin;

--
-- Name: reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.reservation_id_seq OWNED BY public.reservation.id;


--
-- Name: reservation_rating; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.reservation_rating (
    id integer NOT NULL,
    rating integer NOT NULL,
    description character varying NOT NULL,
    "reservationId" integer
);


ALTER TABLE public.reservation_rating OWNER TO admin;

--
-- Name: reservation_rating_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.reservation_rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservation_rating_id_seq OWNER TO admin;

--
-- Name: reservation_rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.reservation_rating_id_seq OWNED BY public.reservation_rating.id;


--
-- Name: sports_facility; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.sports_facility (
    id integer NOT NULL,
    name character varying NOT NULL,
    "totalSportsFields" integer NOT NULL,
    phone character varying NOT NULL,
    "addressId" integer,
    user_id integer
);


ALTER TABLE public.sports_facility OWNER TO admin;

--
-- Name: sports_facility_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.sports_facility_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sports_facility_id_seq OWNER TO admin;

--
-- Name: sports_facility_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.sports_facility_id_seq OWNED BY public.sports_facility.id;


--
-- Name: sports_field; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.sports_field (
    id integer NOT NULL,
    name character varying NOT NULL,
    sport character varying NOT NULL,
    "isIndoor" boolean NOT NULL,
    "soccerFieldType" character varying NOT NULL,
    "tennisFieldType" character varying NOT NULL,
    "priceListId" integer,
    user_id integer,
    "sportFacilityId" integer
);


ALTER TABLE public.sports_field OWNER TO admin;

--
-- Name: sports_field_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.sports_field_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sports_field_id_seq OWNER TO admin;

--
-- Name: sports_field_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.sports_field_id_seq OWNED BY public.sports_field.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "fiscalCode" character varying NOT NULL,
    "addressId" integer
);


ALTER TABLE public."user" OWNER TO admin;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO admin;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: address id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- Name: price_list id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.price_list ALTER COLUMN id SET DEFAULT nextval('public.price_list_id_seq'::regclass);


--
-- Name: reservation id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation ALTER COLUMN id SET DEFAULT nextval('public.reservation_id_seq'::regclass);


--
-- Name: reservation_rating id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation_rating ALTER COLUMN id SET DEFAULT nextval('public.reservation_rating_id_seq'::regclass);


--
-- Name: sports_facility id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_facility ALTER COLUMN id SET DEFAULT nextval('public.sports_facility_id_seq'::regclass);


--
-- Name: sports_field id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_field ALTER COLUMN id SET DEFAULT nextval('public.sports_field_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.address (id, state, city, "streetName", "streetNumber", postcode) FROM stdin;
\.


--
-- Data for Name: price_list; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.price_list (id, "pricePerHour") FROM stdin;
\.


--
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.reservation (id, "startDate", "endDate", "createdAt", state, price, user_id, "sportsFieldId") FROM stdin;
\.


--
-- Data for Name: reservation_rating; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.reservation_rating (id, rating, description, "reservationId") FROM stdin;
\.


--
-- Data for Name: sports_facility; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.sports_facility (id, name, "totalSportsFields", phone, "addressId", user_id) FROM stdin;
\.


--
-- Data for Name: sports_field; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.sports_field (id, name, sport, "isIndoor", "soccerFieldType", "tennisFieldType", "priceListId", user_id, "sportFacilityId") FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."user" (id, username, password, email, "firstName", "lastName", "fiscalCode", "addressId") FROM stdin;
\.


--
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.address_id_seq', 1, false);


--
-- Name: price_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.price_list_id_seq', 1, false);


--
-- Name: reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.reservation_id_seq', 1, false);


--
-- Name: reservation_rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.reservation_rating_id_seq', 1, false);


--
-- Name: sports_facility_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.sports_facility_id_seq', 1, false);


--
-- Name: sports_field_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.sports_field_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- Name: reservation PK_48b1f9922368359ab88e8bfa525; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY (id);


--
-- Name: sports_field PK_4f7c4027b0b91efffd7d8bb4222; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_field
    ADD CONSTRAINT "PK_4f7c4027b0b91efffd7d8bb4222" PRIMARY KEY (id);


--
-- Name: price_list PK_52ea7826468b1c889cb2c28df03; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.price_list
    ADD CONSTRAINT "PK_52ea7826468b1c889cb2c28df03" PRIMARY KEY (id);


--
-- Name: sports_facility PK_83fb4cce21fb04c7abce0bcaf8e; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_facility
    ADD CONSTRAINT "PK_83fb4cce21fb04c7abce0bcaf8e" PRIMARY KEY (id);


--
-- Name: reservation_rating PK_9cdefd88c55996990945a8dc7da; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation_rating
    ADD CONSTRAINT "PK_9cdefd88c55996990945a8dc7da" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: address PK_d92de1f82754668b5f5f5dd4fd5; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY (id);


--
-- Name: sports_field FK_0f96197c61bea85d49e8cce215a; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_field
    ADD CONSTRAINT "FK_0f96197c61bea85d49e8cce215a" FOREIGN KEY ("sportFacilityId") REFERENCES public.sports_facility(id);


--
-- Name: user FK_217ba147c5de6c107f2fa7fa271; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES public.address(id);


--
-- Name: sports_facility FK_41d03087ce9983821b5349aa28d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_facility
    ADD CONSTRAINT "FK_41d03087ce9983821b5349aa28d" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: sports_field FK_8b4464cc4ac2a78c86ebcff2e8d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_field
    ADD CONSTRAINT "FK_8b4464cc4ac2a78c86ebcff2e8d" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: reservation FK_ae138407fdac0c470d6b5a82ac2; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT "FK_ae138407fdac0c470d6b5a82ac2" FOREIGN KEY ("sportsFieldId") REFERENCES public.sports_field(id);


--
-- Name: sports_field FK_b5144168d060a8b27ba2e9e1d21; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_field
    ADD CONSTRAINT "FK_b5144168d060a8b27ba2e9e1d21" FOREIGN KEY ("priceListId") REFERENCES public.price_list(id);


--
-- Name: reservation_rating FK_d703e54cc5c99da8ddbb1a62755; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation_rating
    ADD CONSTRAINT "FK_d703e54cc5c99da8ddbb1a62755" FOREIGN KEY ("reservationId") REFERENCES public.reservation(id);


--
-- Name: reservation FK_e219b0a4ff01b85072bfadf3fd7; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT "FK_e219b0a4ff01b85072bfadf3fd7" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: sports_facility FK_e8c98fd724b9ab11b142eee48df; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sports_facility
    ADD CONSTRAINT "FK_e8c98fd724b9ab11b142eee48df" FOREIGN KEY ("addressId") REFERENCES public.address(id);



INSERT INTO public.address VALUES(nextval('public.address_id_seq'),'italia','napoli','via benedetto brin','69',80134);
INSERT INTO public.address VALUES(nextval('public.address_id_seq'),'italia','napoli','via benedetto brin','70',80134);
INSERT INTO public.address VALUES(nextval('public.address_id_seq'),'italia','napoli','via benedetto brin','71',80134);

INSERT INTO public.user VALUES(nextval('public.user_id_seq'),'luca','$2a$10$.5Vc5SEbDfB/1OMdS/wJJ.d2qDZXgWe4xiaxygDPtpCoyGOG2J/SS','lucabianco@fervento','luca','bianco','lslslslslsl',1);
INSERT INTO public.user VALUES(nextval('public.user_id_seq'),'lorenzo','$2a$10$rD1DMTwS.eP/CJ2m.NxvHuYjAIIC8SB.5c0eW7j1kh/.eZTBzh8GK','lorenzodestriere@fervento','lorenzo','destriere','ldldlldldld',2);
INSERT INTO public.user VALUES(nextval('public.user_id_seq'),'fabio','$2a$10$m1naU6mMTbufwSATrbfuI.W156m8wzF0uuR53xJCg3ZUpCyGlSVry','fabiobianco@fervento','fabio','bianco','fsfsfslsffsl',3);
--

INSERT INTO public.price_list VALUES(nextval('public.price_list_id_seq'),5);
INSERT INTO public.price_list VALUES(nextval('public.price_list_id_seq'),6);
INSERT INTO public.price_list VALUES(nextval('public.price_list_id_seq'),7);


INSERT INTO public.sports_facility VALUES (nextval('public.sports_facility_id_seq'),'Fervento',10,'02828382383',1,1);
INSERT INTO public.sports_facility VALUES (nextval('public.sports_facility_id_seq'),'Fervento2',11,'02228382383',1,2);
INSERT INTO public.sports_facility VALUES (nextval('public.sports_facility_id_seq'),'Fervento3',12,'02328382383',1,3);


INSERT INTO public.sports_field VALUES(nextval('public.sports_field_id_seq'),'soccer 5 field','soccer',TRUE,'5','4',1,1,1);
INSERT INTO public.sports_field VALUES(nextval('public.sports_field_id_seq'),'soccer 5 field','soccer',TRUE,'5','4',1,2,2);
INSERT INTO public.sports_field VALUES(nextval('public.sports_field_id_seq'),'soccer 5 field','soccer',TRUE,'5','4',1,3,3);

INSERT INTO  public.reservation VALUES (nextval('public.reservation_id_seq'),'2023-4-22T13:00:00','2023-4-22T14:00:00','2023-4-21T10:00:00','pending',0,1,1);
INSERT INTO  public.reservation VALUES (nextval('public.reservation_id_seq'),'2023-4-23T13:00:00','2023-4-23T14:00:00','2023-4-21T10:00:00','pending',0,2,1);
INSERT INTO  public.reservation VALUES (nextval('public.reservation_id_seq'),'2023-4-24T13:00:00','2023-4-24T14:00:00','2023-4-21T10:00:00','pending',0,3,1);


--
-- PostgreSQL database dump complete
--

