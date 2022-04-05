from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response

from .serializers import HeroSerializer
from .models import Hero


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer

    def post(self, request, format=None):
        serializers = HeroSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


def home(request):
    return render(request, 'index.html')
