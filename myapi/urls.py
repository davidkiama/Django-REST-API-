
from unicodedata import name
from django.urls import path

from . import views


urlpatterns = [
    path('', views.HeroViewSet.as_view({'get': 'list'})),
    path('home/', views.home, name='home-page')
]
